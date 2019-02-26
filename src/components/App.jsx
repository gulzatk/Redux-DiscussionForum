import React from 'react';
import Header from './Header';
import Profile from './Profile';
import PostList from './PostList';
import FriendList from './FriendsList';
import NewPostForm from './NewPostForm';
import { pseudoRandomBytes } from 'crypto';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';



const mainStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto 2fr 1fr'
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: 'happy',     
    };

    this.handleLikesChange = this.handleLikesChange.bind(this);
    this.statusSubmit = this.statusSubmit.bind(this);
    this.handleDisLikesChange = this.handleDisLikesChange.bind(this);
  }


  handleLikesChange(id) {
    for(let post of this.state.masterPostList){
      if(post.id === id) {
        post.likes++;
        let newState = Object.assign({}, this.state.masterPostList, post);
        this.setState({newState});
      }
    }
  }

  handleDisLikesChange(id){
    for(let post of this.state.masterPostList){
      if(post.id===id){
        post.dislikes++;
        let newState = Object.assign({}, this.state.masterPostList,post);
        this.setState({newState});
      }
    }
  }


  statusSubmit(input) {
    if(input.input ==='happy'){
      this.setState({
        userStatus: input.input + ' 😄'
      });
    } else if (input.input ==='sad'){
      this.setState({
        userStatus: input.input + ' 😢'
      });
    } else if (input.input ==='angry'){
      this.setState({
        userStatus: input.input + ' 😡'
      });
    }else if (input.input ==='bored'){
      this.setState({
        userStatus: input.input + ' 😒'
      });
    }
    else if (input.input ==='sleepy'){
      this.setState({
        userStatus: input.input + ' 😴'
      });
    } else if (input.input ==='surprised'){
      this.setState({
        userStatus: input.input + ' 😱'
      });
    }

                          
    console.log(this.state.userStatus);
  }


  render() {
    return (
      <div>
        <Header /><hr />
        <div className="mainContent" style={mainStyle}>
          <div>
            <Profile userStatus={this.state.userStatus} newStatusSubmit={this.statusSubmit} />       
          </div>
          <PostList postList={this.props.masterPostList}
            changeLikes={this.handleLikesChange}
            changeDisLikes={this.handleDisLikesChange}
          />

          <NewPostForm /> 
          <FriendList />

        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};
App.propTypes = {
  masterPostList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));