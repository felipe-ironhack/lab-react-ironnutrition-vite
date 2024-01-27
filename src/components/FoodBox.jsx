function FoodBox(props) {
	const { name, calories, image, servings, id } = props.food;


	return (
		<div>
			<p>{name}</p>

			<img src={image} width={40} alt={name} />

			<p>Calories: {calories} </p>
			<p>Servings {servings}</p>

			<p>
				<b>Total Calories: {servings * calories} </b> kcal
			</p>

			<button onClick={() => props.deleteFood(id)}>Delete</button>
		</div>
	);
}

export default FoodBox;
