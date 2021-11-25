import React, { useState } from 'react';

export default function Login(props) {
    const [state, setState] = useState();

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.login(state.username, state.password);
    }

    const onChange = (evt) => {
        setState({ ...state, [evt.target.id]: evt.target.value });
    }

    return (
        <div className="container login-container">
            <div className="row justify-content-md-center">
                <form onSubmit={onSubmit} onChange={onChange}>
                <div className="row justify-content-md-center login-input-row">
                        <h2>Attendant</h2>
                    </div>
                    <div className="row justify-content-md-center login-input-row">
                        <input type="text" placeholder="username" id="username" />
                    </div>
                    <div className="row justify-content-md-center login-input-row">
                        <input type="password" placeholder="password" id="password" />
                    </div>
                    <div className="row justify-content-md-center login-input-row">
                        <input type="submit" value="Login" className="btn btn-dark btn-small" />
                    </div>
                </form>
            </div>
        </div>


    )
}