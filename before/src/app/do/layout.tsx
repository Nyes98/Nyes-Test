export default function DoLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <div>암두헤더</div>

            {children}

            <div>암두푸터</div>
        </section>
    );
}
