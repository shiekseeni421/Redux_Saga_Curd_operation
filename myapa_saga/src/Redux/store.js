import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducer from "./Reducer";
import createSagaMiddleware from "redux-saga";
import { WatchUser } from "../SagaEl/userSaga";

const sagaMiddleWare = createSagaMiddleware();

const middleWare = [thunk];
const store = createStore(reducer, applyMiddleware(sagaMiddleWare));

export default store;

sagaMiddleWare.run(WatchUser);
