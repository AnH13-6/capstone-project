import produce from 'immer';
import create from 'zustand';

const vacationStore = set => ({
	vacations: [
		{
			vacationName: 'Italy 2021',
			id: 'vacation1',
			entries: [{text: 'Test Entry', date: 'date'}],
		},
		{
			vacationName: 'Japan 2015',
			id: 'vacation2',
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

	updateVacation: vacation =>
		set(
			produce(draft => {
				console.log(vacation);
				const vacationToUpdate = draft.vacations.find(
					element => element.id === vacation.id
				);
				console.log('in updateVacation:');
				console.log(vacationToUpdate);
				vacationToUpdate.entries.push({date: vacation.date, text: vacation.entry});
			})
		),
});

const useVacationStore = create(vacationStore);

export default useVacationStore;
