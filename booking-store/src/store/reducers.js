import { combineReducers } from 'redux';

const initialState = {
  user: { firstname: localStorage.getItem('firstName'), lastname: localStorage.getItem('lastName'), Phone: localStorage.getItem('phone'), email: localStorage.getItem('email') }
};
function user(state = initialState.user, action) {
 switch (action.type) {
   case 'SET_USER_DATA':
     return action.user;
   default:
     return state;
 }
}

const reducers = combineReducers({
 user
});
export default reducers;