import { REFRESH_USER_LIST } from "../action/userAction";
import { SHOW_MODAL_UPDATE_USER } from "../action/userAction";
import { HIDE_MODAL_UPDATE_USER } from "../action/userAction";

const initialState = {
  shouldRefreshUserList: false,
  showModalUpdateUser: false,
  selectedUser: null,
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
    default:
      return state;
  }
};

export default userReducer;
