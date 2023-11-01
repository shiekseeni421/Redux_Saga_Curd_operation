import { CombinedState, combineReducers } from "@reduxjs/toolkit";
import UserDataReducer from "./UserReducer";

const reducer = combineReducers({ allUserData: UserDataReducer });

export default reducer;
