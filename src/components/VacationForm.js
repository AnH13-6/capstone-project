import {nanoid} from 'nanoid';
import {useState} from 'react';

import useVacationStore from '../hooks/useVacationStore';

export default function VacationForm() {
	const addVacation = useVacationStore(state => state.addVacation);

	const [vacationName, setVacationName] = useState('');

	const handleVacationAdd = () => {
		addVacation({id: nanoid(), vacationName: vacationName, entries: []});
		setVacationName('');
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
				<button type="submit" onClick={() => handleVacationAdd}>
					Add
				</button>
			</form>
		</>
	);
}
