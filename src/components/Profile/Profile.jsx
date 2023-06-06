import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <h1>My Profile</h1>
      <img src={avatar} alt="User avatar" className={styles.avatar}/>
      <ul className={styles.description}>
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </ul>
      <ul className={styles.stats}>
        <li>
          <span className="label">Followers</span>
          <span className="quantity"> {followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity"> {views}</span>
        </li>
        <li>  
          <span className="label">Likes</span>
          <span className="quantity"> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;