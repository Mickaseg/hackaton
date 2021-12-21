import { useState, useEffect } from "react"
import Card from "../components/Card"

import "./Shop.css"
const Characters = () => {
	const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		const getData = () => {
			fetch("https://miadil.github.io/starwars-api/api/all.json")
				.then((res) => res.json())
				.then((res) => {
					console.log(res)
					setCharacters(res)
					setIsLoading(true)
				})
		}
		getData()
	}, [])

	return (
        <div>
		<div>
			Characters !
			<div className="GaleryCharacters">
				{isLoading ? (
					characters.map((character) => (
						<Card
							key={character.id}
							id={character.id}
							name={character.name}
							image={character.image}
							
						/>
					))
				) : (
					<div>...Loading</div>
				)}
			</div>
		</div>
	

            {/* <h1> Make your Choice </h1>
            <select name="gender">
                {characters.gender.map((element) => element.forEach(
                    <option value={element}>{element}</option>))}

            </select>
            <select name="homeworld">
                {characters.homeworld.map(element => element.forEach(
                    <option value={element}>{element}</option>
                ))}
            </select>
            <select name="haircolor">
                {characters.haircolor.map((element)=> element.forEach(
                    <option value={element}>{element}</option>
                ))}
            </select>
            <select name="eyecolor">
                {characters.eyecolor.map((element)=> element.forEach(
                    <option value={element}>{element}</option>
                ))}
            </select> */}
        </div>
    )
}

export default Characters