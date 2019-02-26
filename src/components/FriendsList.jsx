import React from 'react';
import FriendRequest from './FriendRequest';

function FriendsList() {
  return (
    <div>
      <h2>People you might know</h2>
      <FriendRequest
        name="Gulzat Karimova"
      />
    </div>
  );
}

export default FriendsList;