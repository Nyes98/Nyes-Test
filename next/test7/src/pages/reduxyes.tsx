import { useDispatch } from 'react-redux';
import { incrementAsync } from '../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHook';
import { AppDispatch } from '@/redux/store';

const MyComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useAppSelector((state) => state.counter.loading);
    const { value: count } = useAppSelector((state) => state.counter);

    function handleIncrementAsync() {
        dispatch(incrementAsync(5)); // dispatch the async thunk with an amount of 5
    }

    return (
        <div>
            <p>Value: {count}</p>
            <button onClick={handleIncrementAsync} disabled={loading}>
                {loading ? 'Loading...' : 'Increment Async'}
            </button>
        </div>
    );
};

export default MyComponent;
