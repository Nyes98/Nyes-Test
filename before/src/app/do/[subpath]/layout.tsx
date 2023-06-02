export default function SubPathLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>암두하위헤더</div>

            {children}

            <div>암두하위푸터</div>
        </section>
    );
}
