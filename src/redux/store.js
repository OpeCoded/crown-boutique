//applyMiddleware recieves actions and logs it or display them for us and pass it to the root reducer
import { createStore, applyMiddleware } from "redux";
//allows our browser to actually cache our store (local storage and session)
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

import  rootSaga  from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
//enabling our logger only if we are in develoment environment
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

//this is a persisted version of our store above...we will now use the two to wrap our app
export const persistor = persistStore(store);

export default { store, persistor };
