import React from 'react';
import Profile from './Profile/Profile';
import user from './data/user';
import data from './data/data.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/Friendlist';
import friends from './data/friends';
import transactions from './data/transactions';
import TransactionHistory from './History/History';


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

      
    <TransactionHistory items={transactions} />
    </div>
  );
};