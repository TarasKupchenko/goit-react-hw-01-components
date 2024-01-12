import React from 'react';
import Profile from '../Profile/Profile.jsx';
import user from './user.json';
import Statistics from '../Statistics/Statistics'; 
import data from './data.json';
import FriendList from '../FriendList/FriendList.jsx'; 
import friends from './friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import transactions from './transactions.json';
import './app.css';

export const App = () => {
  return (
   <div className='container'>
      <div>
            <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
            />
      </div>
       <div>
       <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
         <FriendList friends={friends} />
         </div>
         <div>
         <TransactionHistory items={transactions} />
         </div>
      </div>
  );
};
