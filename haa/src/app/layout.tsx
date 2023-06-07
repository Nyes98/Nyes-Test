import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';
import { Providers } from '@/redux/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Providers>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </Providers>
            </body>
        </html>
    );
}
