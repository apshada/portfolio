import Hero from '../components/Hero';

import Head from 'next/head';



export default function Index () {
	return (
		<>
			<Head>
				<title>Aditya's Portfolio</title>
				<meta name="description" content="Aditya's Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/images/profile.jpeg" />
			</Head>
			<div>
				<Hero />
			</div>
		</>
	);
};
