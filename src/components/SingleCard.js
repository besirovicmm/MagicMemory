import React, { useContext } from 'react'
import './SingleCard.css'
import { GlobalContext } from '../context/GlobalContext'

const SingleCard = ({ card, flipped, disabled }) => {
  const { choiceOne, setChoiceTwo, setChoiceOne } = useContext(GlobalContext)
  const handleBackClick = () => {
    if (!disabled) choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="front" alt="card front" src={card.src}></img>
        <img
          className="back"
          alt="card back"
          onClick={handleBackClick}
          src="/img/cover.png"
        ></img>
      </div>
    </div>
  )
}

export default SingleCard
