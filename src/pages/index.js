import Head from 'next/head';

import EntryForm from '../components/EntryForm';
import VacationForm from '../components/VacationForm';
import Vacations from '../components/vacations';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<h1>My Vacations</h1>
			<VacationForm />
			<Vacations />
			<EntryForm />
		</>
	);
}
