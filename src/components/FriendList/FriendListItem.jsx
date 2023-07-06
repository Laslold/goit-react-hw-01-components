import styled from './friendList.module.css';
import PropTypes from 'prop-types';
export default function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <li className={styled.item}>
      <span
        className={styled.status}
        style={{ backgroundColor: isOnline ? '#00FF00' : '#FF0000' }}
      >
        {isOnline}
      </span>
      <img classNames={styled.avatar} src={avatar} alt={name} width="20" />
      <p className={styled.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
