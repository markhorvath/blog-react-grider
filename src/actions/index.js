import _ from 'lodash';
import jsonPlaceholder from '../apis/JSONPlaceholder';

    //dispatch is a function from redux-thunk that has unlimited power to initiate
    //changes to the data on the redux side of our app
    //with getState, we can read any data we want, so with both dispatch and getState we can read and write our redux data
    //it was (dispatch, getState) as the function arguments but we weren't going to use getState

    //this was refactored, it's essentialy just a func returning a function
    export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch);
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});

//This _fetchUser memoize func is similar to the original fetchUser func but is used to
//call each user only once.  It uses lodash's memoize func to wrap around another func (in this)
//case essentially the oroginal fetchUser and to store the return value so it doesn't have to be
//called again.  We had to ad the id and dispatch args to successfully make api request, and
//we added async/await as before