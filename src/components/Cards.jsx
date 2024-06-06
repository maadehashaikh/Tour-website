import React from 'react'
import Card from './Card';

const Cards = ({data}) => {
  return (
    <div>
      {
        data.map((onecard)=> {
          return <Card {...onecard}/>
        })
      }
    </div>
  )
}

export default Cards
