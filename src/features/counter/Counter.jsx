import { useDispatch, useSelector } from 'react-redux';
import { selectCount, increment, decrement } from './counterSlice';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());

  return (
    <>
      <h1>Counter: {count}</h1>
      <button type="button" onClick={handleIncrement}>
        increment
      </button>
      <button type="button" onClick={handleDecrement}>
        decrement
      </button>
    </>
  );
}
