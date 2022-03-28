import * as React from 'react';

import { RootState } from './store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reducer/counter';

const App:React.FC = () => {

    const dispatch = useDispatch()
    const count = useSelector<RootState>(state => state.counter.value);

    return (
        <React.Fragment>
            <button type="button" className="btn btn-dark" onClick={() => dispatch(increment())}>INCREASE</button>
            <button type="button" className="btn btn-dark" onClick={() => dispatch(decrement())}>DECREASE</button>
            { count }
        </React.Fragment>
    )
}
export default App
