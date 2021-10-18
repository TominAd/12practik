const number0fFilms = +prompt("Сколько фильмоф вы уже простотрели", "");

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt("один из последних просмотренных фильмоф?", ""),
        b = prompt("на сколько оцените его?", ""),
        c = prompt("один из последних просмотренных фильмоф?", ""),
        d = prompt("на сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);
