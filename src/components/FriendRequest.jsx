import React from 'react';
import PropTypes from 'prop-types';

function FriendRequest(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <button>Button</button>
      <hr />
    </div>
  );
}

FriendRequest.propTypes = {
  name: PropTypes.string.isRequired
   
};

export default FriendRequest;