import '@/src/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import wrapper from '../../redux/store';
import AppLayout from '../components/layout/AppLayout';

function App({ Component, pageProps }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    return (
        <Provider store={store}>
            <AppLayout>
                <Component {...props} />
            </AppLayout>
        </Provider>
    );
}

export default App;
