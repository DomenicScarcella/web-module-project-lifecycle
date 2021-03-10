import React from 'react';
import { ExternalLink } from 'react-external-link';

const Card = ({user}) => {
    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={user.avatar_url} alt='user avatar'/>
            </div>
            <div className='cardText'>
                <h2>{user.name}</h2>
                <h3><i>{user.login}</i></h3>
                <p><ExternalLink href={user.html_url} /><br /><br />
                <strong>Location:</strong> {user.location}<br />
                <strong>Followers:</strong> {user.followers}<br />
                <strong>Following:</strong> {user.following}<br />
                <strong>Bio:</strong> {user.bio}</p>
            </div>
        </div>
    );
}

export default Card;