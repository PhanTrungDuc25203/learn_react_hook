export const REFRESH_USER_LIST = "REFRESH_USER_LIST";
export const SHOW_MODAL_UPDATE_USER = "SHOW_MODAL_UPDATE_USER";
export const HIDE_MODAL_UPDATE_USER = "HIDE_MODAL_UPDATE_USER";

export const triggerRefreshUserList = () => {
  return {
    type: REFRESH_USER_LIST,
  };
};

export const showModalUpdateUser = (user) => {
  console.log("User in redux: ", user);
  return {
    type: SHOW_MODAL_UPDATE_USER,
    selectedUser: user,
  };
};

export const hideModalUpdateUser = () => {
  return {
    type: HIDE_MODAL_UPDATE_USER,
  };
};
