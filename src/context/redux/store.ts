// external
import createSagaMiddleware from "redux-saga";
import {applyMiddleware, createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"

// internal
import {rootReducer} from "../../reducers/rootReducer";
import {rootSaga} from "../../sagas/rootSaga";

// concretes middlewares
const sagaMiddleware = createSagaMiddleware();

// middlewares array
const middlewares = [sagaMiddleware];

// configuring store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));


// run saga's middlewares
sagaMiddleware.run(rootSaga)

