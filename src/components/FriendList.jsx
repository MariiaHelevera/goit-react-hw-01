import FriendListItem from "./FriendListItem"

export default function FriendList({friends}) {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => 
                <li key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                </li>)}
        </ul>
    );
}