export const REFRESH_USER_LIST = "REFRESH_USER_LIST";
export const SHOW_MODAL_UPDATE_USER = "SHOW_MODAL_UPDATE_USER";
export const HIDE_MODAL_UPDATE_USER = "HIDE_MODAL_UPDATE_USER";
export const SHOW_MODAL_CONFIRM_DELETE_USER = "SHOW_MODAL_CONFIRM_DELETE_USER";
export const HIDE_MODAL_CONFIRM_DELETE_USER = "HIDE_MODAL_CONFIRM_DELETE_USER";

export const triggerRefreshUserList = () => {
  return {
    type: REFRESH_USER_LIST,
  };
};

export const showModalUpdateUser = (user) => {
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

export const showModalConfirmDeleteUser = (user) => {
  return {
    type: SHOW_MODAL_CONFIRM_DELETE_USER,
    userToDelete: user,
  };
};

export const hideModalConfirmDeleteUser = () => {
  return {
    type: HIDE_MODAL_CONFIRM_DELETE_USER,
  };
};
