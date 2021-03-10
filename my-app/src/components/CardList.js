import React from 'react';
import ReactDOM from 'react-dom';

const CardList = ({followers}) => {
    console.log('cardlist.js', followers);



    return (
        <div>
            {
                followers.map(follower => {
                    return(
                        <div>
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
