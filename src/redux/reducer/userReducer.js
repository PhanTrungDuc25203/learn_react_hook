import {
  REFRESH_USER_LIST,
  SHOW_MODAL_UPDATE_USER,
  HIDE_MODAL_UPDATE_USER,
  SHOW_MODAL_CONFIRM_DELETE_USER,
  HIDE_MODAL_CONFIRM_DELETE_USER,
} from "../action/userAction";

const initialState = {
  shouldRefreshUserList: false,
  showModalUpdateUser: false,
  selectedUser: null,
  userToDelete: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_USER_LIST:
      return {
        ...state,
        shouldRefreshUserList: !state.shouldRefreshUserList,
      };
    case SHOW_MODAL_UPDATE_USER:
      return {
        ...state,
        showModalUpdateUser: true,
        selectedUser: action.selectedUser || null,
      };
    case HIDE_MODAL_UPDATE_USER:
      return {
        ...state,
        showModalUpdateUser: false,
        selectedUser: null,
      };
    case SHOW_MODAL_CONFIRM_DELETE_USER:
      return {
        ...state,
        showModalConfirmDeleteUser: true,
        userToDelete: action.userToDelete || null,
      };
    case HIDE_MODAL_CONFIRM_DELETE_USER:
      return {
        ...state,
        showModalConfirmDeleteUser: false,
        userToDelete: null,
      };
    default:
      return state;
  }
};

export default userReducer;
