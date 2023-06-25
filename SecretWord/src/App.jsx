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

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

 
 const pickWordAndCategory = () => {
  // escolhendo categoria aleatória.
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];// floor arredonda para baixo no caso de estar recebendo um float

  // escolhendo palavra aleatória.
     const word =
     words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category, word);

    return {word, category}
    }

  //Iniciando o jogo.
  const startGame = () =>{

    // Escolhendo uma palavra
    const {word, category} = pickWordAndCategory();

    // Separando a palavra em letras e tratando Maiúscula
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));

    console.log(category, word);
    console.log(wordLetters);
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
