import {nanoid} from 'nanoid';
import create from 'zustand';

let vacationStore = set => ({
	vacations: [
		{
			vacationName: 'Italy 2021',
			id: nanoid(),
			entries: [{text: 'Test Entry', id: nanoid(), date: 'date'}],
		},
		{
			vacationName: 'Japan 2015',
			id: nanoid(),
			entries: [],
		},
	],
	addVacation: vacation => {
		set(state => ({
			vacations: [vacation, ...state.vacations],
		}));
	},
	removeVacation: vacationId => {
		set(state => ({
			vacations: state.vacations.filter(vacation => vacation.id !== vacationId),
		}));
	},

	handleEntryAdd: vacation => {
		set(state => ({
			vacations: [{vacation, ...state.vacations.entries, entries: event.target.value}],
		}));
	},
});

const useVacationStore = create(vacationStore);

export default useVacationStore;
