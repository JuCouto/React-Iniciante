import React from 'react'
import "./GameOver.css";

const GameOver = ({retry}) => {
  return (
    <div className='gameOver'>
        <h2>Game Over</h2>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver