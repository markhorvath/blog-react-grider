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

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
}