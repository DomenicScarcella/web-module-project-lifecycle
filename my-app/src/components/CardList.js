import React from 'react';

const CardList = ({followers}) => {
    return (
        <div className='cardList'>
            {
                followers.map(follower => {
                    return(
                        <div className='follower'>
                            <div>
                                <img width='100px' src={follower.avatar_url} alt='user avatar'/>
                            </div>
                            <div>
                                {/* <h2>{follower.name}</h2> */}
                                <h3><i>{follower.login}</i></h3>
                                {/* <p>{follower.location}</p>
                                <p>{follower.html_url}</p>
                                <p>{follower.followers}</p>
                                <p>{follower.following}</p>
                                <p>{follower.bio}</p> */}
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    );
}


export default CardList;
