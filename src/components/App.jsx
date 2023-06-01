import React from 'react';
import Profile from './Profile';
import user from '../data/user.json';
import data from '../data/data.json';
import Statistics from './Statistics';
import FriendList from './Friendlist';
import friends from '../data/friends.json';
export const App = () => {
  return (
    <div
      style={{
        height: '7  00px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <p>My friends</p>
      <FriendList friends={friends} />
    </div>
  );
};