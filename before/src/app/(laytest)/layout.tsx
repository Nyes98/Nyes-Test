export default function LaytestLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div>레이테스트시작</div>

            {children}

            <div>레이테스트끄읏</div>
        </section>
    );
}
