import React from 'react'
import PropTypes from 'prop-types';

const UserProfile = ({ id, username, age }) => {
    return (
        <div key={id}>
            <h4>User Profile</h4>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
            <p>ID: {id}</p>
        </div>
    )
}

UserProfile.propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    age: PropTypes.number
};

    UserProfile.defaultProps = {
        username: 'user',
        id: 3,
    };

const UserList = () => {
    const users = [
        { id: 1, age: 25 },
        { id: 2, username: 'User2', age: '30' },
        { id: undefined, username: 'User3', age: 35 }
    ];
    return (
        <div>
            <h1>PropTypes</h1>
            {users.map(user =>
                <UserProfile
                    key={user.id}
                    id={user.id}
                    username={user.username}
                    age={user.age}
                />
            )}
        </div>
    )
}

export default UserList;