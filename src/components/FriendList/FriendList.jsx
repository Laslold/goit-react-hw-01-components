import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";
import styled from "./friendList.module.css";
export default function FriendList({ friends }) {
  return (
    <ul className={styled.friendList}>
      {friends.map((el) => (
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
          id={el.id}
        />
      ))}
    </ul>
  );
}
FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  id: PropTypes.string.isRequired,
};
