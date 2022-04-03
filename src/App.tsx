import * as React from 'react';

import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counter';

import Navbar from './components/Navbar'

function App () {

    const dispatch = useDispatch()
    const count = useSelector<RootState>(state => state.counter.value);

    return (
        <>
            <div className="row">
                <div className="col">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-dark" onClick={() => dispatch(increment())}>INCREASE</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-dark" onClick={() => dispatch(decrement())}>DECREASE</button>
                </div>
                <div className="col">
                    { count }
                </div>
            </div>
        </>
    )
}
export default App
