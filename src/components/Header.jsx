import React from 'react';


function Header() {
  let gridStyle = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr'
  };

  let menuStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'

  };
  return (
    <div style={gridStyle}>
      <style jsx >{`
        button{
            margin: 10px;
            color: #fff;
            height: 40px;
            background-color: lightblue;
            font-size: 20px;
            border-radius: 10%;
        }
        `}
      </style>
      <div className="menu" style={menuStyle}>
        <button> Home</button>
        <button> Notifications</button>
        <button> Messages</button>
      </div>

      <input id="searchStyle" type="text" placeholder="Search.." />
      <input type=" text" placeholder="Tweet" />

    </div>
  );
}
export default Header;