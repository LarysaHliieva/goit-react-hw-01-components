import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem/FriendListItem';

import css from './FriendList.module.css';

const FriendList = ({ friends = [] }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          isOnline={isOnline}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
