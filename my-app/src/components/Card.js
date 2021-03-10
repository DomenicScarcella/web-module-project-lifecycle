import React from 'react';
import ReactDOM from 'react-dom';

const Card = ({user}) => {
    console.log(user);
    return (
        <div className=''>
            <div>
                <img width='100px' src={user.avatar_url} alt='user avatar'/>
            </div>
            <div>
                <h2>{user.name}</h2>
                <h3><i>{user.login}</i></h3>
                <p>{user.location}</p>
                <p>{user.html_url}</p>
                <p>{user.followers}</p>
                <p>{user.following}</p>
                <p>{user.bio}</p>
            </div>
        </div>
    );
}

export default Card;