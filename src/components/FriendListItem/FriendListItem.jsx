import css from './FriendListItem.module.css'
const FriendListItem = ({avatar, name, isOnline}) => {
    const online = isOnline

  return (
    <div>
      <img className={css.user_logo}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={css.user_name}>{name}</p>

      {
        online ? <p className={css.user_on} >Online</p> : <p className={css.user_off}>Offline</p>
      }
      
    </div>
  );
};

export default FriendListItem;
