import {HiOutlineBookOpen} from 'react-icons/hi';

import useVacationStore from '../hooks/useVacationStore';

function Vacations() {
	const {vacations, removeVacation} = useVacationStore();
	return (
		<>
			<ul>
				{vacations.map(vacation => (
					<li key={vacation.id}>
						<button>
							{vacation.vacationName}
							<HiOutlineBookOpen />
						</button>
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
		</>
	);
}

export default Vacations;
