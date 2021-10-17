import React from 'react'

const CardItem = ( {actor} ) => {
    return (
       
        <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img src={actor.img} alt='' />
          </div>
          <div className='card-back'>
            <h1>{actor.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {actor.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {actor.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {actor.birthday}
              </li>
              <li>
                <strong>Status:</strong> {actor.status}
              </li>
            </ul>
          </div>
        </div>
      </div>
       
    )
}

export default CardItem
