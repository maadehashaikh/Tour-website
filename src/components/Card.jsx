import React , {useState} from 'react'

const Card = ({id,imageLink,price,place,info,deleter,selector}) => {
  const [readmore,setReadmore] = useState(false);
  function readmoreHandler () {
    setReadmore(!readmore);
  }
  const description  = readmore ? info : `${info.substring(0,200)}...`

  return (
    <div className='card'>
     <img src={imageLink} alt="" />
     <h2 className='price'>{price}</h2>
     <h2 className='place'>{place}</h2>
     <p>{description} <span onClick={readmoreHandler}> show more</span></p>
      <button onClick={()=> selector(id)} className='btn1'>Interested</button>
      <button onClick={() => deleter(id)} className='btn2'>not Interested</button>
     
    </div>
  )
}

export default Card
