import css from "./FriendList.module.css"
import FriendListItem from "./FriendListItem"

export default function FriendList({friends}) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => 
                <li className={css.friendListItem} key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>)}
        </ul>
    );
}