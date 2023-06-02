export default function DoDoComponent({ test, te }: { test: () => void; te: number }) {
    return (
        <>
            <div onClick={test}>암버튼</div>
            <div>{te}</div>
            <div>
                <img src="/vercel.svg" alt="next" />
            </div>{' '}
        </>
    );
}
