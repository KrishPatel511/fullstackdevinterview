import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice';

const ReduxToolKitCounter = () => {

    const count = useSelector((state) => state.counter.value);

       const dispatch = useDispatch();
  return (

    <>
       <h2>Redux Toolkit Counter</h2>
        <h3>{count}</h3>
   <button onClick={() => dispatch(increment())}>
    Increment
   </button>

   <button onClick={() => dispatch(decrement())}>
       Decrement
   </button>
    </>
    
  )
}

export default ReduxToolKitCounter