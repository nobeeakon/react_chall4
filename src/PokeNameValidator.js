import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  // get random pokemon
  const getRandomPok = () => {
    let index = Math.floor(Math.random() * pokemons.length);
    return pokemons[index];
  };

  // component states
  const [inputText, setInputText] = useState("");
  const [randPok, setRandPok] = useState(getRandomPok());

  // compare input with stored value
  useEffect(() => {
    if (inputText.trim().toLowerCase() === randPok.toLocaleLowerCase()) {
      alert("Correct! Play again?");
      setRandPok(getRandomPok());
      setInputText("");
    }
  }, [inputText, randPok]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{randPok}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        id="inputPokemon"
        type="text"
        placeholder="Enter the Pokémon name"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  );
}
