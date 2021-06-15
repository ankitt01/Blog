import React, { Component } from 'react';
import {connect} from 'react-redux' //To wire the action creator
import {fetchPosts} from '../actions' //action creator
class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }
    
    render() { 
        return ( 
            <div>PostList</div>
         );
    }
}
 
export default connect(null, {fetchPosts})(PostList);