import { wrapper } from '../redux/store';
import AppLayout from '@/components/layout/AppLayout';
import '../styles/globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import Remote from '@/components/common/Remote';

const MyApp = ({ Component, ...rest }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(rest);
    return (
        <Provider store={store}>
            <AppLayout>
                <Header />
                <Component {...props.pageProps} />
                <Footer />
                <Remote />
            </AppLayout>
        </Provider>
    );
};

export default MyApp;
