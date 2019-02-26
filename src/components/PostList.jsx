import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
//   console.log(props.postList);
  // let postBody = {
  //     display: 'grid',
  //     gridTemplateColumns: '1fr 1fr 1f'

  // }

  return (
    <div>
      <hr />
      {Object.keys(props.postList).map(function(postId) {
        var post = props.postList[postId];
        return  <Post name={post.name}
          content={post.content}
          id={postId}
          likes={post.likes}
          dislikes={post.dislikes}
          changeLikes={props.changeLikes}
          changeDisLikes={props.changeDisLikes}
          postId={postId}/>;
      })}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  changeLikes: PropTypes.func,
  changeDisLikes: PropTypes.func

};


export default PostList;