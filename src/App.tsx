import * as React from 'react';

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/reducer/counter';

import Navbar from './components/Navbar'
import { useState } from "react";

interface User {
    user_id: string,
    user_pw: string,
    access_token: string,
    refresh_token: string
}

function App () {

    const [showNavbar, setShowNavbar] = useState<boolean>(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const count = useSelector<RootState>(state => state.counter.value);
    const user = useSelector<RootState>(state => state.user) as User

    if(user?.user_id) navigate("/")
    else navigate("/login")

    return (
        <div className="vh-100">
            {user?.user_id &&
                <div className="row pb-5">
                    <div className="col">
                        <Navbar/>
                    </div>
                </div>
            }
            <div className="row container pt-2">
                <Routes>
                    <Route path="/login" element={<h1>LOGIN</h1>}/>
                    <Route path="/home" element={<h1>HOME</h1>}/>
                    <Route path="dropdown">
                        <Route path="action" element={<h1>action</h1>}/>
                    </Route>
                    <Route path="/" element={<h1>test</h1>}/>
                    <Route element={<h1>NotFound</h1>}/>
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
                <div>
                    { JSON.stringify(user) }
                </div>
            </div>
        </div>
    )
}
export default App
