import { REFRESH_USER_LIST } from "../action/userAction";

const initialState = {
  shouldRefreshUserList: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_USER_LIST:
      return {
        ...state,
        shouldRefreshUserList: !state.shouldRefreshUserList, // toggle để gây ra thay đổi
      };
    default:
      return state;
  }
};

export default userReducer;
