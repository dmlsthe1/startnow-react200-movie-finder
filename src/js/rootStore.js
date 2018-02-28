import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import promiseMiddleWare from "redux-promise-middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(rootReducer, composeEnhancers(
    applyMiddleware(
        promiseMiddleWare()
    )
));

export default rootStore;