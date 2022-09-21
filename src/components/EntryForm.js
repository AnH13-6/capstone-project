import useVacationStore from '../hooks/useVacationStore';

export default function EntryForm() {
	const {vacations} = useVacationStore();

	return (
		<form>
			<label htmlFor="vacation-select">Choose a vacation: </label>
			<select name="vacations" id="vacation-select">
				{vacations.map(vacation => (
					<option key="vacationSelect" value={vacations.vacationName} required>
						{vacation.vacationName}
					</option>
				))}
			</select>
			<label>Date: </label>
			<input type="date" name="date" required />
			<label htmlFor="text-entry">Diary entry: </label>
			<textarea id="text-entry" name="entry" placeholder="Today I ..."></textarea>
			<button type="submit">Save</button>
		</form>
	);
}
