import React from 'react';
import ReactDOM from 'react-dom';

const Card = ({user}) => {
    console.log(user);
    return (
        <div>
            <div>
                <img width='100px' src={user.avatar_url} alt='user avatar'/>
            </div>
            <div>
                <h2>{user.name}</h2>
                <h3><i>{user.login}</i></h3>
                <p>Location: {user.location}</p>
                <p>Profile link: {user.html_url}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Bio: {user.bio}</p>
            </div>
        </div>
    );
}

export default Card;