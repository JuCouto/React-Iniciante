import { useCallback, useEffect, useState } from "react";

import './App.css'

// data
import { wordsList } from "./data/words";

import TelaInicial from './components/TelaInicial/TelaInicial'
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);


  //Iniciando o jogo.
  const startGame = () =>{
    setGameStage(stages[1].name)
  }

  // processando a letra digitada
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  // reiniciar o jogo
  const retry = () =>{
    setGameStage(stages[0].name)
  }
  
  return (
    <div className="App">
     {gameStage === "start" && <TelaInicial startGame={startGame}/>}
     {gameStage === "game" && <Game verifyLetter={verifyLetter}/>}
     {gameStage === "end" && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
