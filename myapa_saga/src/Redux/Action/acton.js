import actionType from "./actionType";

export const GetALLUsers = () => {
  return { type: actionType.GET_USERS };
};

export const DeleteUsers = (id) => {
  return { type: actionType.DELETE_USERS, id };
};

export const AddUser = (data) => {
  return {
    type: actionType.ADD_USERS,
    data,
  };
};

export const Update_user = (data) => {
  return {
    type: actionType.UPDATE_USER,
    data,
  };
};
