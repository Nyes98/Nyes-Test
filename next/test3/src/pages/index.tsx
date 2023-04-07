import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { slice } from '@/redux/store/reducer/user';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Link from 'next/link';

const Home = () => {
    const Test = useAppSelector((state) => state.user.email);
    const Test1 = useAppSelector((state) => state.user.value);
    const dispatch = useDispatch();

    const test1 = () => {
        setTimeout(() => {
            dispatch(slice.actions.thunk(3));
        }, 1000);
    };

    const test = () => {
        dispatch(slice.actions.login('changed'));
    };

    return (
        <div>
            <Title onClick={test}>{Test}</Title>
            <div onClick={test1}>타스트2 : {Test1}</div>
            <Link href="/main">이거누르면진짜후회함 경고했음</Link>
        </div>
    );
};

export default Home;

const Title = styled.h1`
    color: #2f5fd1;
    margin-left: 300px;
`;
