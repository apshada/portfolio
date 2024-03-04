import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

import Head from 'next/head';

const Home = () => {
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
				<About />
				<Projects />
				<Contact />
			</div>
		</>
	);
};

export default Home;
