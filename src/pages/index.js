import Head from 'next/head';

import EntryForm from '../components/EntryForm';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<EntryForm />
		</>
	);
}
