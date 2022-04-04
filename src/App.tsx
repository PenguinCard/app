import * as React from 'react';

import { Routes, Route } from "react-router-dom";

import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counter';

import Navbar from './components/Navbar'
import {useState} from "react";

function App () {

    const [userID, setUserID] = useState<String>('');
    const dispatch = useDispatch()
    const count = useSelector<RootState>(state => state.counter.value);

    return (
        <>
            <div className="row pb-3">
                <div className="col">
                    <Navbar/>
                </div>
            </div>
            <div className="row container pt-5">
                <Routes>
                    <Route path="/home" element={<h1>HOME</h1>}/>
                    <Route path="dropdown">
                        <Route path="action" element={<h1>action</h1>}/>
                    </Route>
                </Routes>
                <div className="col">
                    <button type="button" className="btn btn-dark" onClick={() => dispatch(increment())}>INCREASE</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-dark" onClick={() => dispatch(decrement())}>DECREASE</button>
                </div>
                <div className="col">
                    { count }
                </div>

                <ol>
                    <li className="item1">상품금액 : 310300원 = price_won*0.725</li>
                    <li className="item2">운송비 및 기타 : 70620원 = price_won*0.165</li>
                    <li className="item3">수입대행 수수료 : 47080원 = price_won-price_won*0.89</li>
                </ol>
            </div>
        </>
    )
}
export default App
