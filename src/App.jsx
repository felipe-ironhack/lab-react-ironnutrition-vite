import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox.jsx';
import foodsJson from './foods.json';
import AddFoodForm from './components/AddFoodForm.jsx';
import Search from './components/Search.jsx';

function App() {
	const [foods, setFoods] = useState(foodsJson);
	const [query, setQuery] = useState('');

	function deleteFood(id) {
		const newFoods = foods.filter((food) => food.id !== id);
		setFoods(newFoods);
	}

	const foodsToDisplay = foods.filter((food) =>
		food.name.toLowerCase().includes(query.toLowerCase())
	);


	return (
		<div className='App'>
			<h1>LAB | React IronNutrition</h1>
			<AddFoodForm setFoods={setFoods} foods={foods} />

			<Search query={query} setQuery={setQuery} />

			{foodsToDisplay.map((food) => (
				<FoodBox key={food.id} food={food} deleteFood={deleteFood} />
			))}
		</div>
	);
}

export default App;
