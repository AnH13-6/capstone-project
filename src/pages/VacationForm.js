import {nanoid} from 'nanoid';
import {useState} from 'react';

export default function VacationForm() {
	const [vacations, setVacations] = useState([
		{
			vacationName: 'Italy 2021',
			id: nanoid(),
			entries: [],
		},
		{
			vacationName: 'Japan 2015',
			id: nanoid(),
			entries: [],
		},
	]);

	console.log(vacations);

	return (
		<>
			<form
				onSubmit={event => {
					event.preventDefault();
					const inputElement = event.target.elements.newVacation;
					console.log(inputElement);
					const newVacationItem = {
						vacationName: inputElement.value,
						id: nanoid(),
						entries: [],
					};
					const newListArray = [...vacations, newVacationItem];
					setVacations(newListArray);
					console.log(setVacations);
					event.target.reset();
				}}
			>
				<label>Add a new vacation: </label>
				<input
					id="newVacation"
					type="text"
					name="newVacation"
					placeholder="ex. Sweden 2022"
					required
				></input>
				<button type="submit">Add</button>
			</form>
		</>
	);
}
