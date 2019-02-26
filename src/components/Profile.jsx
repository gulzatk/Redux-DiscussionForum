import React from 'react';
import PropTypes from 'prop-types';

function Profile(props) {
    
  let _status= null;

  function finalStatusSubmit(event) {
    event.preventDefault();
    props.newStatusSubmit({input: _status.value});
    _status.value ='';

  }
  let boxStyle = {
    margin: 15,
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 2,
    marginRight: 30,
    paddingBottom: 35


  };
  let background = {
    backgroundColor: 'blue',
    height: 150,
    // width: 250
  };
  let image = {
    position: 'relative',
    height: 100,
    width: 100,
    bottom: 50,
    left: 15,
    borderColor: 'white',
    backgroundColor: 'blue',
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
  };
  let name = {
    textAlign: 'right',
    fontWeight: 'bold',
    paddingRight: 130,
    paddingTop: 15
  };
  let status = {
    marginLeft: 10,
    width: 130,
    height: 30,
    fontSize: 14

  };

  return (
    <div style={boxStyle}>
      <div style={background}>
      </div>
      <div style={image}></div>
      <div><h2 style={name}>Kellie A. Corrigan</h2> </div>
      <table>
        <tbody>
          <tr>
            <th>TWEETS</th>
            <th>FOLLOWING</th>
            <th>FOLLOWERS</th>
          </tr>
        </tbody>
      </table>
      <p>Today's mood is {props.userStatus}</p>
      <form onSubmit={finalStatusSubmit}>
        <input style={status} type="text" placeholder="Your mood today..." id="status" ref={(input) => {_status = input;}}></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

Profile.propTypes = {
  newStatusSubmit: PropTypes.func,
  userStatus: PropTypes.string
};

export default Profile;