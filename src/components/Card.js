import "./Card.css"

const Card = ({ name, image, id }) => {
	return (
		<div key={id}>
			<p>{name}</p>
			<img className="CardImg" src={image} alt={name} />
		</div>
	)
}
export default Card