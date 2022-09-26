import {useState} from 'react';

import useVacationStore from '../hooks/useVacationStore';

export default function EntryForm() {
	const {vacations, updateVacation} = useVacationStore();
	const [selectedVacationId, setSelectedVacationId] = useState(vacations[0].id);

	const selectVacation = event => {
		const selectedElement = event.target;
		const selectedValue = selectedElement.value;
		setSelectedVacationId(selectedValue);
	};

	return (
		<>
			<form
				onSubmit={event => {
					event.preventDefault();
					const formData = new FormData(event.target);
					const formValues = Object.fromEntries(formData);
					setSelectedVacationId(formValues.id);
					console.log({formValues});
					updateVacation(formValues);
				}}
			>
				<label htmlFor="date">Date: </label>
				<input type="date" name="date" id="date" required value={vacations.entries.date} />
				<label htmlFor="text-entry">Diary entry: </label>

				<textarea
					id="text-entry"
					name="entry"
					value={vacations.entries.text}
					placeholder="Today I ..."
					rows="15"
					cols="40"
				></textarea>
				<label htmlFor="id">Choose a vacation: </label>
				<select
					name="id"
					onChange={event => selectVacation(event)}
					value={selectedVacationId}
				>
					{vacations.map(vacation => (
						<option key={vacation.id} value={vacation.id}>
							{vacation.vacationName}
						</option>
					))}
				</select>
				<button type="submit">Save</button>
			</form>

			{vacations.map(vacation => {
				if (vacation.id === selectedVacationId) {
					return (
						<ul key={selectedVacationId}>
							{vacation.entries.map((entry, i) => (
								<li key={`entry-${i}`}>
									{entry.date}, {entry.text}
								</li>
							))}
						</ul>
					);
				}
			})}
		</>
	);
}
