// import PropTypes from 'prop-types';
import React from 'react';
const FriendList = ({ friends }) => {
  return (
    <ul
      className="friend-list"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  const statusStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
  };

  return (
    <li className="item">
      <span className="status" style={statusStyle}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
      <style jsx>{`
        .item {
          display: flex;
          align-items: center;
          margin-bottom: 1px;
        }
        .status {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .avatar {
          border-radius: 20%;
          margin-right: 10px;
        }
      `}</style>
    </li>
  );
};

export default FriendList;