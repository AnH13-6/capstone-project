import {nanoid} from 'nanoid';
import create from 'zustand';

const vacationStore = set => ({
	vacations: [
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
	],
	addVacation: vacation => {
		set(state => ({
			vacations: [vacation, ...state.vacations],
		}));
		console.log(set);
	},
	removeVacation: vacationId => {
		set(state => ({
			vacations: state.vacations.filter(vacation => vacation.id !== vacationId),
		}));
	},
});

const useVacationStore = create(vacationStore);

export default useVacationStore;
