import {HiOutlineBookOpen as OpenBookIcon} from 'react-icons/hi';

import useVacationStore from '../hooks/useVacationStore';

function Vacations() {
	const {vacations, removeVacation} = useVacationStore();
	return (
		<ul>
			{vacations.map(vacation => (
				<li key={vacation.id}>
					{vacation.vacationName}
					<OpenBookIcon />
					<button
						onClick={() => {
							removeVacation(vacation.id);
						}}
					>
						Delete
					</button>
				</li>
			))}
		</ul>
	);
}

export default Vacations;
