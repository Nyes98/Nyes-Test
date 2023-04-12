import { wrapper } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { decrement, increment } from '../redux/features/counterSlice';
import { selectAuthState, setAuthState } from '../redux/features/authSlice';
import { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BeginningCarousel from '@/components/common/BeginningCarousel';
import MainCarousel from '@/components/common/MainCarousel';
import RecentMinting from '@/components/common/RecentMinting';
import CardCarousel from '@/components/common/CardCarousel';

const Home = function () {
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    const handleA = (e: any) => {
        setA(e.target.value);
        console.log(a);
    };

    const handleB = (e: any) => {
        setB(e.target.value);
        console.log(b);
    };

    const callDB = async () => {
        const dataa = await axios.get('http://localhost:5000/');
    };

    const createTest = async () => {
        console.log('A :', a, 'B : ', b);
        const data = await axios.post('http://localhost:5000/api/ys', { a: a, b: b });
        console.log(data);
    };

    useEffect(() => {
        callDB();
    }, []);

    return (
        <div>
            <input type="text" onInput={handleA} />
            <input type="text" onInput={handleB} />
            <div onClick={createTest}>등록</div>
            <MainCarousel />
            <BeginningCarousel />
            <RecentMinting />
            <CardCarousel />
            <RecentMinting />
        </div>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ params }) => {
    // 초기 상태를 설정할 수 있고, 커스텀 로직을 추가할 수 있다.
    // 서버 단에서 Redux 액션을 수행할 수 있다.
    store.dispatch(increment());
    store.dispatch(setAuthState(false));
    console.log('State on server', store.getState());
    return {
        props: {},
    };
});

export default Home;
