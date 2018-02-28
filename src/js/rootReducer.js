import { combineReducers } from "redux";
import movieSearchReducer from "./reducers/movieSearchReducer";

const rootReducer = combineReducers({
    search: movieSearchReducer
});

export default rootReducer;