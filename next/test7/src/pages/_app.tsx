import type { AppProps } from 'next/app';
import { wrapper } from '../redux/store';
import AppLayout from '@/components/layout/AppLayout';
import '../styles/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AppLayout>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AppLayout>
    );
}

export default wrapper.withRedux(MyApp);
