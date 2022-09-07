export const SET_MOVIE = 'SET_MOVIE';

export const addMovie = (movie) => ({
    type: SET_MOVIE,
    payload: movie
});