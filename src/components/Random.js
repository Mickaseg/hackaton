import {useState, useEffect} from "react"

import Card from "./Card"
import "./Random.css"

const Random = () => {
	const [characters, setCharacters] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const alea = () => {
		const min = Math.ceil(0);
		const max = Math.floor(87);
		return  Math.floor(Math.alea() * (max - min)) + min;
	}
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
			<div className="GaleryCharacters">
                <button onClick={Random}>let destiny make for you</button>
				{isLoading ? (
					characters.map((character) => (
						<Card
							key={alea}
							id={character.id}
							name={character.name}
							image={character.image}	
						/>
					))
				) : (
					<div>...Loading</div>
				)}
			</div>
    )
}



//     return (
//         <div className="">
//             <h2>{item}</h2>
//             <img src={image} alt="destiny"/>
//             
//         </div>
//     )
// }

export default Random
