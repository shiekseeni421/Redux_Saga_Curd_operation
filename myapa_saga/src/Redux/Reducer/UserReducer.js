import actionType from "../Action/actionType";

const initial_State = {
  Number_Mobiles: 0,
  User_DATA: [],
  Delete_DATA: {},
  add_item: {},
  Update_item: {},
};

const UserDataReducer = (state = initial_State, action) => {
  switch (action.type) {
    case "GET_ALL_USERS_SUCCESS":
      return { ...state, User_DATA: action.data };
    case "Delete_USERS_SUCCESS":
      return { ...state, Delete_DATA: action.data };
    case "ADD_USER_SUCCESS":
      return { ...state, add_item: action.data };
    case "UPDATE_USER_SUCCESS":
      return { ...state, Update_item: action.data };
    default:
      return state;
  }
};
export default UserDataReducer;
