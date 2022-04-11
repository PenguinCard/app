import * as React from 'react';

function LoginForm() {
    return (
        <div className="loginBackGround">
            <div className="loginFormStyle">
                <div className="row" style={{ margin: "10px 0"}}>
                    <div className="col">
                        <h2 style={{ textAlign: "center"}}>LOGIN</h2>
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
                            />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "10px 0"}}>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input type="password"
                                   className="form-control"
                                   id="floatingPassword"
                                   placeholder="Password"
                                   style={{ height: "60px"}}/>
                                <label htmlFor="floatingPassword">Password</label>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ margin: "10px 0"}}>
                    <div className="col">
                        <button type="button" className="btn btn-dark mb-3" style={{ width: "100%", height: "60px" }}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
