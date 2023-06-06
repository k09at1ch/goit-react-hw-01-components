// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './Friendlist.module.css';
// const FriendList = ({ friends }) => {
//   return (
//     <ul
//       className="friend-list"
//       style={{ display: 'flex', flexDirection: 'column' }}
//     >
//       {friends.map(friend => {
//         const { avatar, name, isOnline } = friend;
//         return (
//           <li className={styles.item} key={friend.id}>
//             <span
//               className={styles.status}
//               // style={isOnline ? className={styles.status} : statusStyle.red}
//             ></span>
//             <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
//             <p className="name">{name}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//     })
//   ),
// };

// export default FriendList;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        const { avatar, name, isOnline } = friend;
        const statusClass = isOnline ? styles.online : styles.offline;

        return (
          <li className={styles.item} key={friend.id}>
            <span className={`${styles.status} ${statusClass}`}></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
