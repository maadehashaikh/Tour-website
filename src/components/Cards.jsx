import React from 'react'
import Card from './Card';

const Cards = ({data,deleter,selector}) => {
  return (
    <div className='Cards'>
      {
        data.map((onecard)=> {
          return <Card  {...onecard} deleter={deleter} selector={selector}/>
        })
      }
    </div>
  )
}

export default Cards
