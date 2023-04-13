import { useDispatch } from 'react-redux';
import { incrementAsync } from '../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { AppDispatch } from '@/redux/store';
import { idAsync } from '@/redux/features/userSlice';

const MyComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useAppSelector((state) => state.counter.loading);
    const loading2 = useAppSelector((state) => state.user.loading);
    const { value: count } = useAppSelector((state) => state.counter);
    const { id: userId } = useAppSelector((state) => state.user);

    function handleIncrementAsync() {
        dispatch(incrementAsync(5));
    }

    const hand = () => {
        dispatch(idAsync('siu'));
    };

    return (
        <div>
            <p>Value: {count}</p>
            <button onClick={handleIncrementAsync} disabled={loading}>
                {loading ? 'Loading...' : 'Increment Async'}
            </button>
            <p>{userId} 님 어서오세요</p>
            <button onClick={hand} disabled={loading2}>
                {loading2 ? 'Loading...' : 'Id Async'}
            </button>
        </div>
    );
};

export default MyComponent;
