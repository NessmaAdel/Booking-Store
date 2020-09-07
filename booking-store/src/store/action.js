
const setUser = (payload) => ({ type: "SET_USER", payload });
export const fetchUser = (userInfo) => dispatch => {
 dispatch(setUser(userInfo))
};
export const signUserUp = (userInfo) => dispatch => {
 dispatch(setUser(userInfo));
};