import React from 'react';
//import connect and action itself to add an action creator to fetch the appropriate user
import { connect } from 'react-redux';


class UserHeader extends React.Component {
    //whenever UserHeader displays we want to render the appropriate user through props
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userId)
    //     // console.log(this.props); this will return a user value of undefined since
    //     //the api call won't have had time to finish.  This.props.userId is the 'id' arg
    //     //in fetchUsers action creator
    // }

    render() {
        //use the find function to go thru the array looking at every user for the user (props.users) with the same id
        // const user = this.props.users.find((user) => user.id === this.props.userId);

        //destructured... like const user = this.props.user;
        const { user } = this.props;
        // console.log(this.props);
        // console.log(this.props.user); These two do show the API data

        if(!user) {
            return null;
        }
        return <div className="header">{user.name}</div>;
    }
}

//this is all about extracting anything that is going to do some kind of computation on our redux state
//and the props coming in to our component(ownProps) to the mapStateToProps function
//This is done rather than defining const user in the render function, where it searched
//an entire array for one user within the render func
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

//add connect function to wire up the action creator to the component
// starts with 'null' because we dont currently have a mapStateToProps func
export default connect(mapStateToProps)(UserHeader);