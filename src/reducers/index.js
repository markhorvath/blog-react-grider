import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});

//REDUCER RULES:
//1. reducers should never return a value of 'undefined', it must always return something at some point
//2. reducers must produce 'state', or data to be used inside of your app using only previous state and an action
//3. must not reach 'out of itself' to decide what value to return (reducers are pure) ie we'll only ever return some kind of computation of the two arguments 'state' and the action
//4. must not mutate its input 'state' argument,