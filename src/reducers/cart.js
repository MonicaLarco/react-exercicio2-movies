import { SET_MOVIE } from "../actions/AddToPlaylist";

const initialState = {
    movies: []
};

export function cart(state= initialState, action) {
    switch (action.type) {
        case SET_MOVIE:
            return {
                ...state,
                movies: state.movies.concat(action.payload),
            };
    
        default:
            break;
    }
}