import {createStore, combineReducers} from "redux";
import contentReducer from "./contentReducer";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    content: contentReducer,
    header: headerReducer
    
});

let store = createStore(reducers);

window.store = store;
export default store;