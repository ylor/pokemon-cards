import React from "react"

export default function Nav(props) {
	console.log(props)
	const generations = [
		{ id: "1", name: "Kanto" },
		{ id: "2", name: "Johto" },
		{ id: "3", name: "Hoenn" },
		{ id: "4", name: "Sinnoh" },
		{ id: "5", name: "Unova" },
		{ id: "6", name: "Kalos" },
		{ id: "7", name: "Alola" }
		//{ id: "8", name: "Galar" },
	]
	
	const links = generations.map(({ id, name }) => {
		return (
			<button
				key={id}
				onClick={this.passedFuction.bind(this)}
			>
				{name}
			</button>
		)
	})
	
	return <nav>{links}</nav>
}
