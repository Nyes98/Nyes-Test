import { wrapper } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { decrement, increment } from '../redux/features/counterSlice';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BeginningCarousel from '@/components/common/BeginningCarousel';
import MainCarousel from '@/components/common/MainCarousel';
import RecentMinting from '@/components/common/RecentMinting';
import Link from 'next/link';
import { setAuthState } from '@/redux/features/authSlice';
import { createDB, testDB } from '@/apis';
import { IUser } from '@/interfaces/user.interface';

const Home = function () {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [users, setUsers] = useState<IUser[]>([]);

    const cardData = [
        {
            img1: 'membership1',
            img2: 'card1',
            title: '윈윈만의 구독 시스템 제네시스 멤버십',
            contents: '지금 바로 가입해보세요!',
        },
        {
            img1: 'membership1',
            img2: 'card1',
            title: '두번째',
            contents: '가입해라',
        },
        {
            img1: 'membership1',
            img2: 'card1',
            title: '멤버십 멤버십 멤버십 멤버십 멤버십',
            contents: '지금 지금 지금!',
        },
    ];

    const mainData = [
        {
            img1: 'main1',
            img2: 'bottle1',
            title: '존윅이 마시는 위스키는 어떨까요?',
            contents: '최초의 싱글 배럴 버번 블랑톤을 \n 윈윈에서 지금 만나보세요!',
        },
        {
            img1: 'main1',
            img2: 'bottle1',
            title: '존윅이 마시는 소주는 어떨까요?',
            contents: '나는 모르겠으니 \n 너가 알아봐주세요!',
        },
        {
            img1: 'main1',
            img2: 'bottle1',
            title: '존윅이 마시는 와인은 어떨까요?',
            contents: '최초의 최초의 최초의 최초의 최초의 \n 최초의 최초의 최초의!',
        },
    ];

    const recentData = {
        title: '최근 민팅 된 위스키들',
        item: [
            {
                img: 'bottle1',
                name: '발렌타인 12년산',
                price: 300,
            },
            {
                img: 'bottle2',
                name: '화이트데이 12년산',
                price: 100,
            },
            {
                img: 'bottle3',
                name: '경일 12년산',
                price: 12,
            },
        ],
    };

    const popularData = {
        title: '지금 가장 인기있는 위스키!',
        item: [
            {
                img: 'bottle3',
                name: '경일 12년산',
                price: 12,
            },
            {
                img: 'bottle1',
                name: '발렌타인 12년산',
                price: 300,
            },
            {
                img: 'bottle2',
                name: '화이트데이 12년산',
                price: 100,
            },
        ],
    };

    const handleA = (e: any) => {
        setA(e.target.value);
        console.log(a);
    };

    const handleB = (e: any) => {
        setB(e.target.value);
        console.log(b);
    };

    const callTest = async () => {
        const response = await testDB();
        setUsers(response.data);
    };

    const makeDB = async () => {
        const data = await createDB(a, b);
        console.log(data);
    };

    return (
        <div>
            <input type="text" onInput={handleA} />
            <input type="text" onInput={handleB} />
            <div onClick={makeDB}>등록</div>
            <Link href={'/reduxyes'}>뤼덕스</Link>
            <div onClick={callTest}>테스트입니다</div>
            <div
                onClick={() => {
                    console.log(users);
                }}
            >
                테스트
            </div>
            {users.map((item, index) => (
                <div key={`user-${index}`}>{item.name}</div>
            ))}
            <MainCarousel data={mainData} />
            <BeginningCarousel />
            <RecentMinting data={recentData} />
            <MainCarousel data={cardData} />
            <RecentMinting data={popularData} />
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
    store.dispatch(increment());
    store.dispatch(setAuthState(false));

    const post = "hello it's me";
    console.log('State on server', store.getState());
    return {
        props: { post },
    };
});

export default Home;
