export function saveUserDataRequest() {
  return {
    type: '@user/SAVE_USER_DATA',
  };
}

export function saveUserDataSuccess(user) {
  return {
    type: '@user/SAVE_USER_DATA_SUCCESS',
    payload: user,
  };
}
