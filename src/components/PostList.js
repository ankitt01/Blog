import React, { Component } from 'react';
import {connect} from 'react-redux' //To wire the action creator
import {fetchPosts} from '../actions' //action creator
class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    
    render() { 
        console.log(this.props.posts)
        return <div>PostList</div>
    }
}
 
const mapStateToProps = (state) => {
    return {posts: state.posts};
}
export default connect(mapStateToProps, {fetchPosts})(PostList);

//whenever we have to tranfer data from redux to react side
// we have to pass manageStateToProps function down in connect