import jsonPlaceholder from '../apis/JSONPlaceholder';

    //dispatch is a function from redux-thunk that has unlimited power to initiate
    //changes to the data on the redux side of our app
    //with getState, we can read any data we want, so with both dispatch and getState we can read and write our redux data
    //it was (dispatch, getState) but we weren't going to use getState


    export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response });
};