'use client';

import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { Providers } from '@/redux/provider';
import HeaderContainer from '../../components/header/Container';
import Footer from '../../components/footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                ></link>
                <Providers>
                    <StyledComponentsRegistry>
                        <HeaderContainer />
                        {children}
                        <Footer />
                    </StyledComponentsRegistry>
                </Providers>
            </body>
        </html>
    );
}
