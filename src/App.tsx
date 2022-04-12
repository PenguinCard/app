import * as React from 'react';

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { RootState } from './redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/reducer/counter';

import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import { useState, useEffect } from "react";

import './css/App.css'

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

    const count = useSelector<RootState>(state => state.counter.value) as number;
    const user = useSelector<RootState>(state => state.user) as User

    useEffect(() => {
        if (!user || !user.access_token){ navigate("app/login") }
        },[user.access_token])

    return (
        <div className="vh-100">
            {user?.access_token &&
                <div className="row pb-5">
                    <div className="col">
                        <Navbar/>
                    </div>
                </div>
            }
            <Routes>
                <Route path="app/login" element={<LoginForm />}/>
                <Route path="app/home" element={<h1>HOME</h1>}/>
                <Route path="app/dropdown">
                    <Route path="action" element={<h1>action</h1>}/>
                </Route>
                <Route path="app/" element={
                    <div className="row container pt-2">
                        <div className="col">
                            <button type="button" className="btn btn-dark" onClick={() => dispatch(increment())}>INCREASE</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-dark" onClick={() => dispatch(decrement())}>DECREASE</button>
                        </div>
                        <div className="col">
                            {count}
                        </div>
                        <div>
                            { JSON.stringify(user) }
                        </div>
                    </div>
                }/>
            </Routes>
        </div>
    )
}
export default App
