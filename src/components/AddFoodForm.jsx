import { useState } from 'react';
import './AddFoodForm.css';
import { v4 as randomUUID } from 'uuid'

function AddFoodForm(props) {
	const {foods, setFoods} = props
	
	const [name, setName] = useState('');
	const [image, setImage] = useState('');
	const [calories, setCalories] = useState('');
	const [servings, setServings] = useState('');
	
	const addFood = (e) => {
		e.preventDefault();
    const newFood = {
      id: randomUUID(),
      name,
      image,
      calories: Number(calories),
      servings: Number(servings)
    }

    setFoods([newFood, ...foods])

    setName('')
    setImage('')
    setCalories('')
    setServings('')
	};

	return (
		<form onSubmit={addFood}>
			<div className='input-group'>
				<label htmlFor='name'>Name:</label>
				<input
					type='text'
					id='name'
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder='Tomato'
          name='name'
				/>
			</div>

			<div className='input-group'>
				<label htmlFor='image'>Image:</label>
				<input
					type='url'
					id='image'
					value={image}
					onChange={(e) => setImage(e.target.value)}
					placeholder='https://your-tomato-image.com'
          name='image'
				/>
			</div>

			<div className='input-group'>
				<label htmlFor='calories'>Calories:</label>
				<input
					type='number'
					id='calories'
					value={calories}
					onChange={(e) => setCalories(e.target.value)}
					placeholder='300'
          name='calories'

				/>
			</div>

			<div className='input-group'>
				<label htmlFor='servings'>Servings:</label>
				<input
					type='number'
					id='servings'
					value={servings}
					onChange={(e) => setServings(e.target.value)}
					placeholder='1'
          name='servings'
				/>
			</div>

			<button type='submit'>Create</button>
		</form>
	);
}

export default AddFoodForm;
