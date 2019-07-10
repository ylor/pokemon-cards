import React from "react"
import yall from "yall-js"
import "./App.css"
import pokedex from "./pokedex.json"

//inspired by https://codepen.io/csb324/pen/MXVaLj
//inspiration 2: https://cdn.dribbble.com/users/1246853/screenshots/3902471/pokemon.png

function App() {
  console.log(pokedex)

  document.addEventListener("DOMContentLoaded", function() {
    yall({
      observeChanges: true
    })
  })

  return (
    <div className="App">
      <div className="wrapper">
        {pokedex.filter(pokemon => (pokemon.id <152)).map(pokemon => (
          <div key={pokemon.id} id={pokemon.id} className="card">
            <h3>{pokemon.name} HP{pokemon.base.hp}</h3>
            <img
              data-src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(pokemon.id+'').padStart(3,"0")}.png`}
              alt={pokemon.name}
              className="lazy"
            />
            <p>#{(pokemon.id+'').padStart(3,"0")}</p>
            <p>Type {pokemon.type[0]}</p>
            <p>Attack {pokemon.base.attack}</p>
            <p>Defense {pokemon.base.defense}</p>
            <p>Special Attack {pokemon.base.sp_attack}</p> 
            <p>Special Defense {pokemon.base.sp_defense}</p> 
            <p>Speed {pokemon.base.speed}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
