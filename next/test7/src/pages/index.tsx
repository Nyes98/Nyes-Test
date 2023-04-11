import { wrapper } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { decrement, increment } from '../redux/features/counterSlice';
import { selectAuthState, setAuthState } from '../redux/features/authSlice';
import { NextPage } from 'next';
import SimpleSlider from '@/components/common/MainCarousel';

const Home = function () {
    return (
        <div>
            <SimpleSlider />
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
