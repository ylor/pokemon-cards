import React, { Component } from "react"
import data from "./pokedex.json"

let firstMon = 1,
	lastMon = 151

export default class App extends Component {
	state = {
		pokedex: data,
		pokedexFiltered: []
	}

	componentDidMount() {
		console.log(this.state.pokedex)
		this.setState({
			pokedexFiltered: this.state.pokedex.filter(mon => mon.id >= firstMon && mon.id <= lastMon)
		})
	}

	switchGen(gen) {
		switch (gen) {
			case 1:
				firstMon = 1
				lastMon = 151
				break
			case 2:
				firstMon = 152
				lastMon = 251
				break
			case 3:
				firstMon = 252
				lastMon = 386
				break
			case 4:
				firstMon = 387
				lastMon = 493
				break
			case 5:
				firstMon = 494
				lastMon = 649
				break
			case 6:
				firstMon = 650
				lastMon = 721
				break
			case 7:
				firstMon = 718
				lastMon = 809
				break
			default:
				firstMon = 1
				lastMon = 151
		}
		this.setState({
			pokedexFiltered: this.state.pokedex.filter(mon => mon.id >= firstMon && mon.id <= lastMon)
		})
		console.log(this.state.pokedexFiltered)
	}

	render() {
		return (
			<div className="wrapper">
				<nav>
					<button
						onClick={() => {
							this.switchGen(1)
						}}
					>
						1
					</button>
					<button
						onClick={() => {
							this.switchGen(2)
						}}
					>
						2
					</button>
					<button
						onClick={() => {
							this.switchGen(3)
						}}
					>
						3
					</button>
					<button
						onClick={() => {
							this.switchGen(4)
						}}
					>
						4
					</button>
					<button
						onClick={() => {
							this.switchGen(5)
						}}
					>
						5
					</button>
					<button
						onClick={() => {
							this.switchGen(6)
						}}
					>
						6
					</button>
					<button
						onClick={() => {
							this.switchGen(7)
						}}
					>
						7
					</button>
				</nav>

				{this.state.pokedexFiltered.map(mon => (
					<div key={mon.id} id={mon.id} className={`card card-${mon.type[0]}`}>
						<div className="card-title">
							<h3 className="card-name">{mon.name}</h3>{" "}
							<div className="card-hp>">
								<span className="card-hp-label">HP&nbsp;</span>
								<h3 className="card-hp">{mon.base.hp}</h3>
							</div>
						</div>
						<div className="card-image-container">
							<img data-src={`img/${(mon.id + "").padStart(3, "0")}.png`} alt={mon.name} className="lazy" />
						</div>
						<div className="card-caption">
							<h3 className="card-info card-num">#{(mon.id + "").padStart(3, "0")}</h3>
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
				))}
			</div>
		)
	}
}
