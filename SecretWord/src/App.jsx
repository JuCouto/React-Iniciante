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

const GuessesNumber =3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(GuessesNumber);
  const [score, setScore] = useState(0);
 
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
  const startGame = useCallback(() => {
    // apagando todas as letras
    clearLettersStates();

    // Escolhendo uma palavra
    const {word, category} = pickWordAndCategory();

    // Separando a palavra em letras e tratando Maiúscula e acento
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));


    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  // processando a letra digitada
  const verifyLetter = (letter) =>{
    // setGameStage(stages[2].name)
    const normalizedLetter = letter.toLowerCase();

    // check se a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    //imprimir a letra adivinhada, se errada perde uma chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  // reiniciar o jogo
  const retry = () =>{
    setScore(0);
    setGuesses(GuessesNumber);
    setGameStage(stages[0].name);
  }

   // apagar letras do state
   const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // check se chances acabaram
  useEffect(() => {
    if (guesses === 0) {
      // game over e reseta todos os states
      clearLettersStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    console.log(uniqueLetters);
    console.log(guessedLetters);

    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));

      // restart game com nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
     {gameStage === "start" && <TelaInicial startGame={startGame}/>}
     {gameStage === "game" && 
     <Game verifyLetter={verifyLetter}
     pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}/>}
     {gameStage === "end" && <GameOver retry={retry} score={score}/>}
     
    </div>
  )
}

export default App
