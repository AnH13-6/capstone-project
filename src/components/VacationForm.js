import {nanoid} from 'nanoid';
import {useState} from 'react';

import useVacationStore from '../hooks/useVacationStore';

export default function VacationForm() {
	const {addVacation} = useVacationStore();

	const [vacationName, setVacationName] = useState('');

	const handleVacationAdd = () => {
		if (vacationName.length > 0) {
			addVacation({id: nanoid(), vacationName: vacationName, entries: []});
			setVacationName('');
		} else {
			alert('please enter a vacation title');
		}
	};

	return (
		<>
			<form>
				<label>Add a new vacation: </label>
				<input
					value={vacationName}
					onChange={event => {
						event.preventDefault();
						setVacationName(event.target.value);
					}}
					type="text"
					name="newVacation"
					placeholder="ex. Sweden 2022"
					required
				/>
				<button type="submit" onClick={() => handleVacationAdd()}>
					Add
				</button>
			</form>
		</>
	);
}
