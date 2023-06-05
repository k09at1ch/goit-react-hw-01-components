import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  const statusStyle = {
    green: {
      backgroundColor: 'green',
    },
    red: {
      backgroundColor: 'red',
    },
  };
  return (
    <ul
      className="friend-list"
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {friends.map(friend => {
        const { avatar, name, isOnline } = friend;
        return (
          <li className="item" key={friend.id}>
            <span className="status" style={isOnline ? statusStyle.green : statusStyle.red}></span>
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
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
