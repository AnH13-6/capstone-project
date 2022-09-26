import VacationForm from '../components/VacationForm';
import Vacations from '../components/Vacations';

export default function VacationPage() {
	return (
		<>
			<h1>My Vacations</h1>
			<VacationForm />
			<Vacations />
		</>
	);
}
