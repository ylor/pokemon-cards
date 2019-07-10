import React from "react";
import logo from "./logo.svg";
import yall from "yall-js";
import "./App.css";
import pokedex from "./pokedex.json";

//inspired by https://codepen.io/csb324/pen/MXVaLj

function App() {
  console.log(pokedex);
  document.addEventListener("DOMContentLoaded", function() {
    yall({
      observeChanges: true
    });
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="wrapper">
        {pokedex.map(pokemon => (
          <div key={pokemon.id} id={pokemon.id} className="card">
            <h3>{pokemon.name}</h3>
            <img
              data-src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(pokemon.id+"").padStart(3,"0")}.png`}
              alt={pokemon.name}
              className="lazy"
            />
            <p>HP {pokemon.base.hp}</p>
            <p>Attack {pokemon.base.attack}</p>
            <p>Defense {pokemon.base.defense}</p>
            <p>Special Attack {pokemon.base.sp_attack}</p> 
            <p>Special Defense {pokemon.base.sp_defense}</p> 
            <p>Speed {pokemon.base.speed}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
