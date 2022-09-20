import VacationForm from '../components/VacationForm';
import Vacations from '../components/vacations';
import {GlobalStyle} from '../styles';

export default function App({Component, pageProps}) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
			<h1>My Vacations</h1>
			<VacationForm />
			<Vacations />
		</>
	);
}
