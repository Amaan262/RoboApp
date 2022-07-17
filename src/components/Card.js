import React from 'react';
// import robots from './robots'
const Card = (props)=>{
    // const {name,email,id} = props;//this can also be use to destruct parameter if it is not present then we have to write props.name props.id
    
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img alt='robo' src={`https://robohash.org/${props.id}?200x200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        
    );
}

export default Card;