import css from './Profile.module.css'

const Profile = ({ name, tag, status, location, image }) => {
  return (
    <div className={css.card}>
      <div className={css.cardTop}>
        <img
          className={css.cardImg}
          src={image}
          alt={name}
        />
        <p className={css.cardName}>{name}</p>
        <p className={css.cardTag}>@{tag}</p>
        <p className={css.cardLocation}>{location}</p>
      </div>

      <ul className={css.cardDescList}>
        <li className={css.cardDescItem}>
          <span className={css.cardDescTitle}>Followers</span>
          <span className={css.cardDescCount}>{status.followers}</span>
        </li>
        <li className={css.cardDescItem}>
          <span className={css.cardDescTitle}>Views</span>
          <span className={css.cardDescCount}>{status.views}</span>
        </li>
        <li className={css.cardDescItem}>
          <span className={css.cardDescTitle}>Likes</span>
          <span className={css.cardDescCount}>{status.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
