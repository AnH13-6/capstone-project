import {GlobalStyle} from '../styles';

import VacationForm from './VacationForm';

export default function App({Component, pageProps}) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
			<VacationForm />
		</>
	);
}
