import '../styles/globals.css';
import Layout from '../components/layout';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }: any) {
	return (
		<Layout>
			 <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
			<Component {...pageProps} />
		</Layout>
	);
}
