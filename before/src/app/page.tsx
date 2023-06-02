import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Link href={'/do'}>
                <div>이동해볼까</div>
            </Link>
            <Link href={'/dodo'}>
                <div>이동2해볼까</div>
            </Link>
            <Link href={'/lay'}>
                <div>lay</div>
            </Link>
            <Link href={'/laylay'}>
                <div>lay2</div>
            </Link>
        </>
    );
}
