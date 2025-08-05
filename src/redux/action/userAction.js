export const REFRESH_USER_LIST = "REFRESH_USER_LIST";

export const triggerRefreshUserList = () => {
  return {
    type: REFRESH_USER_LIST,
  };
};
