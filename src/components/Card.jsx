import React from 'react'

const Card = ({id,imageLink,price,place,info}) => {
  // console.log(id,imageLink,price,place,info);
  return (
    <div className='card'>
     <img src={imageLink} alt="" />
     <h2>{price}</h2>
     <h2>{place}</h2>
     <p>{info}</p>
     <div>
      <button>Interested</button>
      <button>not Interested</button>
     </div>
    </div>
  )
}

export default Card
