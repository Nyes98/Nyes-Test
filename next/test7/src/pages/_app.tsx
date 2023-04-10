import type { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
