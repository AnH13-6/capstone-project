import useVacationStore from '../hooks/useVacationStore';

export default function EntryForm() {
	const {vacations, handleEntryAdd} = useVacationStore();

	return (
		<>
			<form
				onSubmit={event => {
					event.preventDefault();
					const formData = new FormData(event.target);
					const formValues = Object.fromEntries(formData);
					{
						handleEntryAdd(formValues);
					}
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
				<button type="submit">Save</button>
			</form>
			<ul>
				<li>
					{vacations.entries.date}
					{vacations.entries.text}
				</li>
			</ul>
		</>
	);
}
