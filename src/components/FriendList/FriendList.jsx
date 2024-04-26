import FriendListItem from "../FriendListItem/FriendListItem";
import css from './FriendList.module.css'

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends_list}>
      {friends.map((item) => {
        return (
          <li className={css.friends_item} key={item.id}>
            <FriendListItem
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
