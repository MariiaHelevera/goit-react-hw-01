import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
return (
    <div className={css.profileContainer}>
    <div className={css.profileMainInfo}>
        <img className={css.avatar}
            src={image}
            alt="User avatar"
            width="150"
            height="150"
        />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileInfo}>@{tag}</p>
        <p className={css.profileInfo}>{location}</p>
    </div>

    <ul className={css.profileStatsList}>
        <li className={css.statsListItem}>
            <span className={css.statsTitle}>Followers</span>
            <span className={css.statsValue}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
            <span className={css.statsTitle}>Views</span>
            <span className={css.statsValue}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
            <span className={css.statsTitle}>Likes</span>
            <span className={css.statsValue}>{stats.likes}</span>
        </li>
    </ul>
    </div>
)
}