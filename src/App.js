import React from "react";
import Tilt from 'react-tilt'
import pokedex from "./pokedex.json";

//inspired by https://codepen.io/csb324/pen/MXVaLj
//inspiration 2: https://cdn.dribbble.com/users/1246853/screenshots/3902471/mon.png


function App() {
  console.log(pokedex);
  return (
    <div className="App">
      <div className="wrapper">
        {pokedex
          .filter(mon => mon.id < 152)
          .map(mon => (
            <div
              key={mon.id}
              id={mon.id}
              className={`card card-${mon.type[0]}`}
              dataitlt
            >
              <div className="card-title">
                <h3>{mon.name}</h3>{" "}
                <div className="card-hp>">
                  <span className="card-hp-label">HP&nbsp;</span>
                  <h3 className="card-hp">{mon.base.hp}</h3>
                </div>
              </div>
              <div className="card-image-container">
                <img
                  data-src={`img/${(mon.id + "").padStart(3, "0")}.png`}
                  alt={mon.name}
                  className="lazy"
                />
              </div>
              <div className="card-caption">
                <h3 className="card-info card-num">#{(mon.id + "").padStart(3, "0")}</h3>
                <h3 className="card-info card-type">{mon.type[0]}</h3>
                <table className="card-stats">
                  <p>Attack {mon.base.attack}</p>
                  <p>Defense {mon.base.defense}</p>
                  <p>Special Attack {mon.base.sp_attack}</p>
                  <p>Special Defense {mon.base.sp_defense}</p>
                  <p>Speed {mon.base.speed}</p>
                </table>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
