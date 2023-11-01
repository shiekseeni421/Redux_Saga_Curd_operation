import axios from "axios";
import {
  put,
  takeEvery,
  all,
  delay,
  takeLatest,
  call,
} from "redux-saga/effects";

function* getAllProducts() {
  try {
    let user = yield call(axios.get, "https://fakestoreapi.com/products");
    yield put({ type: "GET_ALL_USERS_SUCCESS", data: user.data });
  } catch (error) {
    yield put({ type: "GET_ALL_USER_FAILED", message: error.message });
  }
}

function* DeleteProducts(action) {
  try {
    let user = yield call(
      axios.delete,
      `https://fakestoreapi.com/products/${action.id}`
    );
    yield put({ type: "Delete_USERS_SUCCESS", data: user.data });
  } catch (error) {
    yield put({ type: "Delete_USER_FAILED", message: error.message });
  }
}

function* AddUsersPages(action) {
  try {
    let user = yield call(
      axios.post,
      `https://jsonplaceholder.typicode.com/todos`,
      {
        title: action.data.title,
        completed: action.data.completed,
      }
    );
    yield put({ type: "ADD_USER_SUCCESS", data: user.data });
  } catch (error) {
    yield put({ type: "ADD_USER_FAILED", message: error.message });
  }
}

function* updateUser(action) {
  console.log(action);
  try {
    let user = yield call(
      axios.put,
      `https://jsonplaceholder.typicode.com/todos/${action.data.user_id}`,
      {
        title: action.data.title,
        completed: action.data.completed,
      }
    );
    yield put({ type: "UPDATE_USER_SUCcESS", data: user.data });
  } catch (error) {
    yield put({ type: "UPDATE_USER_FAILED", message: error.message });
  }
}

export function* WatchUser() {
  yield all([takeEvery("GET_USERS", getAllProducts)]);
  yield all([takeEvery("DELETE_USERS", DeleteProducts)]);
  yield all([takeEvery("ADD_USERS", AddUsersPages)]);
  yield all([takeEvery("UPDATE_USER", updateUser)]);
}
