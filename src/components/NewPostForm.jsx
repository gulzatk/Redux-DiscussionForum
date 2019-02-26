import React from 'react';
import {v4} from 'uuid';
import { connect } from 'react-redux';

function NewPostForm(props) {
  console.log(props);
  let _name = null;
  let _content = null;


  function handleNewPostFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      name: _name.value,
      content: _content.value,
      likes: 0,
      dislikes: 0,
      id: v4()
    };
    dispatch(action);
    _name.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <h4>Create new post</h4>
        <input type="text"
          id="name"
          placeholder="Name"
          ref={input=>{
            _name = input;
          }}
        />
        <textarea
          id="content"
          placeholder="Content goes here"
          ref={textarea=>{
            _content = textarea;
          }}
        />
        <button type= "submit">Post!</button>
      </form>
    </div>
  );
}


export default connect()(NewPostForm);