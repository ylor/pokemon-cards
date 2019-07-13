import React, { Component } from "react"

import data from "./pokedex.json"
import Card from "./components/Card"
import Nav from "./components/Nav"

let firstMon = 1,
	lastMon = 151

export default class App extends Component {
	state = {
		pokedex: data,
		pokedexFiltered: []
	}

	switchGen = (gen) => {
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

	componentDidMount() {
		console.log(this.state.pokedex)
		this.switchGen(1)
	}

	passedFunction = () => {
		alert("asdf")
	}

	render() {
		const generations = [
			{ id: 1, name: "Kanto" },
			{ id: 2, name: "Johto" },
			{ id: 3, name: "Hoenn" },
			{ id: 4, name: "Sinnoh" },
			{ id: 5, name: "Unova" },
			{ id: 6, name: "Kalos" },
			{ id: 7, name: "Alola" }
			//{ id: "8", name: "Galar" },
		]
		
		const links = generations.map(({ id, name }) => {
			return (
				<button
					key={id}
					onClick={() => {
						this.switchGen(id)
					}}
				>
					{name}
				</button>
			)
		})

		const { pokedexFiltered } = this.state;
	
		return (
			<>
			<nav>{links}</nav>
			<div className="wrapper">
				{ pokedexFiltered.map(mon => (
					<Card key={mon.id} mon={mon} />
				))}
			</div>
			</>
		)
	}
}
