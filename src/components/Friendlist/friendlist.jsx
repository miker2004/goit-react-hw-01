import userData from '../../friendList.json'; 
import './style.css'

function FriendList() {
  return (
    <div className="user-list">
      {userData.map(user => (
        <div key={user.id} className="user-card">
          <img
            src={user.avatar.replace(/^<|>$/g, '')} 
            alt={`${user.name}'s avatar`}
            className="user-avatar"
          />
          <div className="user-info">
            <p className="user-name">{user.name}</p>
            <p className={`user-status ${user.isOnline ? 'online' : 'offline'}`}>
              {user.isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendList;