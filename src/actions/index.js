import _ from 'lodash';
import jsonPlaceholder from '../apis/JSONPlaceholder';

    //dispatch is a function from redux-thunk that has unlimited power to initiate
    //changes to the data on the redux side of our app
    //with getState, we can read any data we want, so with both dispatch and getState we can read and write our redux data
    //it was (dispatch, getState) as the function arguments but we weren't going to use getState

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //this is like manually dispatching the result of calling the action creator fetchPosts
    //we add the 'await' because our next step will be need the response data, so we have
    //to wait for dispatch(fetchPosts()); to complete
    await dispatch(fetchPosts());
    //these are using special lodash funcs, .map is isolating just the userId properties in
    //getState().posts, and .uniq is filtering out the unique values among them
    const userIds = _.uniq(_.map(getState().posts, 'userId'));

    //iterate over list of ids, and call fetchUser action creator for each one
    //no await keyword is because we're not doing any logic calling fetchuser
    //also, it's not possible to use await in a foreach loop, would have to look up an alternative
    userIds.forEach(id => dispatch(fetchUser(id)));
    // console.log(userIds);


    //This is an alternative that uses lodash .chain and does the same exact thing as the code above
    //note that it needs value() at the end
    // _.chain(getState().posts)
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value()
}



    //this was refactored, it's essentialy just a func returning a function
    export const fetchPosts = () => async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
}


//Memoized Version below
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });