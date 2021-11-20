import React from 'react'
import './SingleCard.css'

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" alt="card front" src={card.src}></img>
        <img className="back" alt="card back" src="/img/cover.png"></img>
      </div>
    </div>
  )
}

export default SingleCard
