import React from "react"
import { padNumber } from "./Utils"

export default function Card(props) {
	const mon = props.mon
	return (
		<div key={mon.id} id={mon.id} className={`card card-${mon.type[0]}`}>
			<div className="card-title">
				<h3 className="card-name">{mon.name}</h3>
				<div>
					<span className="card-hp-label">HP&nbsp;</span>
					<h3 className="card-hp">{mon.base.hp}</h3>
				</div>
			</div>
			<div className="card-image-container">
				<img data-src={`img/${padNumber(mon.id)}.png`} alt={mon.name} className="lazy" />
			</div>
			<div className="card-caption">
				<h3 className="card-info card-num">#{padNumber(mon.id)}</h3>
				<h3 className="card-info card-type">{mon.type[0]}</h3>
				<div className="card-stats">
					<p>
						Attack <span>{mon.base.attack}</span>
					</p>
					<p>
						Sp. Attack <span>{mon.base.sp_attack}</span>
					</p>
					<p>
						Defense <span>{mon.base.defense}</span>
					</p>
					<p>
						Sp. Defense <span>{mon.base.sp_defense}</span>
					</p>
					<p>
						Speed <span>{mon.base.speed}</span>
					</p>
				</div>
			</div>
		</div>
	)
}
