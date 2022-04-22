import * as React from 'react';

import * as bcrypt from 'bcryptjs'
import axios from 'axios'

import { useState } from "react";

function LoginForm() {

    const [userID, setUserID] = useState<string>('')
    const [userPW, setUserPW] = useState<string>('')

    async function login() {

        console.log(Math.random());
        const salt:string = bcrypt.genSaltSync(10)

        await axios.post('/api/login', {
            username: userID,
            password: bcrypt.hashSync(userPW, salt)
        })
    }

    return (
        <div className="loginBackGround">
            <div className="loginFormStyle">
                <div className="row" style={{ margin: "10px 0"}}>
                    <div className="col">
                        <h2 className="text-center">LOGIN</h2>
                    </div>
                </div>
                <div className="row" style={{ margin: "10px 0"}}>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="email"
                                   className="form-control"
                                   id="floatingInput"
                                   placeholder="name@example.com"
                                   style={{ height: "60px"}}
                                   value={userID}
                                   onChange={e => setUserID(e.currentTarget.value)}
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "10px 0 4px"}}>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="password"
                                   className="form-control"
                                   id="floatingPassword"
                                   placeholder="Password"
                                   style={{ height: "60px"}}
                                   value={userPW}
                                   onChange={e => setUserPW(e.currentTarget.value)}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                            <div className="row">
                                <div className="col">
                                    <span className="text-center forgot-password">
                                        <small>
                                            &nbsp;Forgot&nbsp;Password?
                                        </small>
                                    </span>
                                </div>
                                <div className="col">
                                    <span className="text-center">
                                        <small>
                                            <i className="bi bi-door-open"></i>Sign Up
                                        </small>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "2px 0"}}>
                    <div className="col">
                        <button type="button"
                                className="btn btn-dark mb-3 w-100"
                                onClick={login}
                                style={{ height: "60px" }}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
