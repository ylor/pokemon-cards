import React from "react";
import { padNumber } from "../Utils";

export default function Card(props) {
  const { mon } = props;
  return (
    <div key={mon.id} id={mon.id} className={`card card-${mon.type[0]} lazy`}>
      <div className="card-title">
        <h3 className="card-name">{mon.name}</h3>
        <div>
          <span className="card-hp-label">HP&nbsp;</span>
          <h3 className="card-hp">{mon.base.hp}</h3>
        </div>
      </div>
      <div className="card-image-container">
        <img
          data-src={`img/${padNumber(mon.id)}.png`}
          alt={mon.name}
          className="lazy"
        />
      </div>
      <div className="card-caption">
        <h3 className="card-info card-num">#{padNumber(mon.id)}</h3>
        <h3 className="card-info card-type">{mon.type[0]}</h3>
        <div className="card-stats">
          <div className="stat-names">
            <p>Attack</p>
            <p>Defense</p>
            <p>Sp. Attack</p>
            <p>Sp. Defense</p>
            <p>Speed</p>
          </div>
          <div className="stat-values">
            <p>{mon.base.attack}</p>
            <p>{mon.base.defense}</p>
            <p>{mon.base.sp_attack}</p>
            <p>{mon.base.sp_defense}</p>
            <p>{mon.base.speed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
