import React, { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import './AboutStyle.css'

const api = "https://kitsu.io/api/edge/";

const About = () => {
  const [text, setText] = useState("");
  const [info, setinfo] = useState({}); // iniciou como objeto pq está recebendo um objeto da api, poderia ser iniciaso como nulo e tratar quando receber um info se ele é nulo.

  useEffect(() => {
    if (text) {
      fetch(`${api}anime?filter[text]=${text}&page[limit]=8`)
        .then((response) => response.json()) // esse json não rtorna diretamente um objeto, ele ainda é uma promise, essa promise converte o objeto em javaScript.
        .then((response) => {
          setinfo(response)
        }); // aqui ele retorna os dados.
    }
  }, [text]);

  return (
    <div>
      <h1>Animes:</h1>
      <SearchInput
        value={text}
        onChange={(stringSearch) => setText(stringSearch)}
      />
      {text && !info.data && (
        <span>Procurando...</span>
      )}
      {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>  {/* toda primeira li precisa ter uma key, se existir um id dar preferência para utiliza-lo, index pode ser ruim */}
             
              <img src={anime.attributes.posterImage.small} alt={anime.attributes.posterImage.small}/>
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default About;
