import {useState, useEffect} from "react"

import Arrow from "./Arrow"
import Card from "./Card"
import "./Random.css"

const Random = () => {
	const [characters, setCharacters] = useState(null)
	const [number, setNumber] = useState(Math.floor(Math.random() * 87))

	useEffect(() => {
		const getData = () => {
			fetch("https://miadil.github.io/starwars-api/api/all.json")
				.then((res) => res.json())
				.then((res) => {
					console.log(res)
					setCharacters(res)
				})
		}
		getData()
	}, [])

	return (
			<div className="random">
				<h2>Let destiny choose for you</h2>
				<div><Arrow /></div>
                <button onClick={()=> setNumber(Math.floor(Math.random() * 87))}>Click Here!</button>
				<div className="randomCard">
					{ characters !== null && 
						<Card
							key={number}
							id={characters[number].id}
							name={characters[number].name}
							image={characters[number].image}	
						/>
					}
				</div>
			</div>
    )
}

export default Random
