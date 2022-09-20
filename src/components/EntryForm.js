//import {useState} from 'react';

import useVacationStore from './hooks/useVacationStore';
// import Vacations from './vacations';

export default function EntryForm() {
	// 	const [entries, setEntries] = useState('');

	return (
		<>
			<form>
				<label htmlFor="chooseVacation">Choose a vacation: </label>
				<select name="vacations" id="vacation-select">
					{useVacationStore.vacations.map(vacation => (
						<option
							key="vacationSelect"
							value={useVacationStore.vacations.vacationName}
							required
						>
							{vacation.vacationName}
						</option>
					))}
				</select>
				<input type="date" name="date" required />
				<label>Diary entry: </label>
				<textarea name="entry" placeholder="Today I ..."></textarea>
				<button type="submit">Save</button>
			</form>
		</>
	);
}
