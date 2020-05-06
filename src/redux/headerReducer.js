const UPDATE_SEARCH_TEXT = "UPDATE_SEARCH_TEXT";
const CLEAR_SEARCH_TEXT = "CLEAR_SEARCH_TEXT";

let initialState = {
    searchBody: '',
    }

const headerReducer= (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_TEXT: {
          return {...state, searchBody: action.text}
        };
        case CLEAR_SEARCH_TEXT: {
          return {...state, searchBody:''}
        }
        default: 
        return state;
    }
   }

export const setSearchBody = (text) => ({ type: UPDATE_SEARCH_TEXT, text });
export const clearSearchBody = () => ({ type: CLEAR_SEARCH_TEXT });

export default headerReducer;