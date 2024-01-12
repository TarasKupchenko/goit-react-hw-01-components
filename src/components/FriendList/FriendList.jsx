import React from 'react';
import css from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
    <li className={css.item}>
      <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
         <img className={css.avatar} src={avatar} alt="User avatar" width="80" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

export default FriendList;
