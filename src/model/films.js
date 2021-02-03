import Observer from '../utils/observer.js';
import {api} from '../main.js';

export default class FilmsModel extends Observer {
  constructor() {
    super();

    this._films = [];
  }

  setFilms(updateType, films) {
    this._films = films.slice();

    this._notify(updateType);
  }

  getFilms() {
    return this._films;
  }

  updateFilm(updateType, update) {
    const index = this._films
      .findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error(`Can't update nonexistent film`);
    }

    this._films = [
      ...this._films.slice(0, index),
      update,
      ...this._films.slice(index + 1)
    ];

    this._notify(updateType, update);
  }

  addComment(updateType, update) {
    const updatedFilm = this._films.filter((film) => film.id === update.id);

    const updateComments = Object.assign({}, updatedFilm[0], {comments: update.comments});

    this.updateFilm(updateType, updateComments);
  }

  deleteComment(updateType, update) {
    const updatedFilm = this._films.filter((film) => film.id === update.id);
    const comments = updatedFilm[0].comments.filter((commentId) => commentId.id !== update.comment);

    const updateComments = Object.assign({}, updatedFilm[0], {comments});

    this.updateFilm(updateType, updateComments);
  }

  static adaptCommentsToClient(comments) {
    const adaptedComments = Object.assign({},
        comments, {
          id: comments.id,
          comment: comments.comment,
          emotion: comments.emotion,
          author: comments.author,
          date: comments.date
        });
    return adaptedComments;
  }

  static updateToClient(film) {
    return api.getComments(film.id).then((commentsCollection) => {
      const adaptedFilm = Object.assign(
          {},
          film,
          {
            id: film.id,
            comments: commentsCollection,
            title: film.film_info.title,
            originalTitle: film.film_info.alternative_title,
            rating: film.film_info.total_rating,
            poster: film.film_info.poster,
            ageRating: film.film_info.age_rating,
            producer: film.film_info.director,
            writers: film.film_info.writers,
            actors: film.film_info.actors,
            release: film.film_info.release.date,
            country: film.film_info.release.release_country,
            filmDuration: film.film_info.runtime,
            genres: film.film_info.genre,
            description: film.film_info.description,
            isInWatchList: film.user_details.watchlist,
            isWatched: film.user_details.already_watched,
            watchingDate: film.user_details.watching_date,
            isFavorite: film.user_details.favorite,
          }
      );
      return adaptedFilm;
    });
  }

  static adaptToClient(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          id: film.id,
          comments: film.comments,
          title: film.film_info.title,
          originalTitle: film.film_info.alternative_title,
          rating: film.film_info.total_rating,
          poster: film.film_info.poster,
          ageRating: film.film_info.age_rating,
          producer: film.film_info.director,
          writers: film.film_info.writers,
          actors: film.film_info.actors,
          release: new Date(film.film_info.release.date),
          country: film.film_info.release.release_country,
          filmDuration: film.film_info.runtime,
          genres: film.film_info.genre,
          description: film.film_info.description,
          isInWatchList: film.user_details.watchlist,
          isWatched: film.user_details.already_watched,
          watchingDate: film.user_details.watching_date,
          isFavorite: film.user_details.favorite,
        }
    );

    return adaptedFilm;
  }

  static updateCommentsToClient(movie) {
    const adaptedMovie = Object.assign(
        {},
        movie,
        {
          id: movie.movie.id,
          comments: movie.comments,
          title: movie.movie.film_info.title,
          originalTitle: movie.movie.film_info.alternative_title,
          rating: movie.movie.film_info.total_rating,
          poster: movie.movie.film_info.poster,
          ageRating: movie.movie.film_info.age_rating,
          producer: movie.movie.film_info.director,
          writers: movie.movie.film_info.writers,
          actors: movie.movie.film_info.actors,
          release: movie.movie.film_info.release.date,
          country: movie.movie.film_info.release.release_country,
          filmDuration: movie.movie.film_info.runtime,
          genres: movie.movie.film_info.genre,
          description: movie.movie.film_info.description,
          isInWatchList: movie.movie.user_details.watchlist,
          isWatched: movie.movie.user_details.already_watched,
          watchingDate: movie.movie.user_details.watching_date,
          isFavorite: movie.movie.user_details.favorite,
        }
    );

    return adaptedMovie;
  }

  static takeCommentId(comments) {
    const commentsIds = [];
    comments.forEach((comment) => {
      commentsIds.push(comment.id);
    });

    return commentsIds;
  }

  static updateToServer(film) {
    const adaptedFilm = Object.assign(
        {},
        {
          "emotion": film.emotion,
          "comment": film.comment,
          "date": film.date
        });

    delete adaptedFilm.comments;

    return adaptedFilm;
  }

  static adaptToServer(film) {
    const adaptedFilm = Object.assign(
        {},
        film,
        {
          "id": film.id,
          "comments": this.takeCommentId(film.comments),
          "film_info": {
            "title": film.title,
            "alternative_title": film.originalTitle,
            "total_rating": film.rating,
            "poster": film.poster,
            "age_rating": film.ageRating,
            "director": film.producer,
            "writers": film.writers,
            "actors": film.actors,
            "release": {
              "date": film.release,
              "release_country": film.country
            },
            "runtime": film.filmDuration,
            "genre": film.genres,
            "description": film.description
          },
          "user_details": {
            "watchlist": film.isInWatchList,
            "already_watched": film.isWatched,
            "watching_date": film.watchingDate,
            "favorite": film.isFavorite,
          }
        }
    );

    delete adaptedFilm.actors;
    delete adaptedFilm.ageRating;
    delete adaptedFilm.country;
    delete adaptedFilm.description;
    delete adaptedFilm.filmDuration;
    delete adaptedFilm.genres;
    delete adaptedFilm.isInWatchList;
    delete adaptedFilm.isFavorite;
    delete adaptedFilm.isWatched;
    delete adaptedFilm.originalTitle;
    delete adaptedFilm.title;
    delete adaptedFilm.poster;
    delete adaptedFilm.rating;
    delete adaptedFilm.release;
    delete adaptedFilm.watchingDate;
    delete adaptedFilm.writers;
    delete adaptedFilm.producer;

    return adaptedFilm;
  }
}
