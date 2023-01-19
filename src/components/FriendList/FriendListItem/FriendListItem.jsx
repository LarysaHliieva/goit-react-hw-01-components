import PropTypes from 'prop-types';

import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const classNameStatus = isOnline
    ? `${css.status} ${css.green}`
    : `${css.status} ${css.red}`;
  return (
    <li key={id} className={css.item}>
      <span className={classNameStatus}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};

export default FriendListItem;
