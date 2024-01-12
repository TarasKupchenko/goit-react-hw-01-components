import React from 'react';
import Profile from './Profile';
import user from './user.json';
import Statistics from './Statistics'; 
import data from './data.json';
import FriendList from './FriendList'; 
import friends from './friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';
import '../css/app.css';

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
