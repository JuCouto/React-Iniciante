import React from 'react'
import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div className='game'>
        <h2>Game</h2>
        <button onClick={verifyLetter}>Finalizar jogo</button>
    </div>
  )
}

export default Game