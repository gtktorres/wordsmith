import React from 'react';
import Proptypes from 'prop-types';
import "./Login.css";

const Login = props => {
    const { userId, password, handleInput, connectToAccount,connectToCreateAccount } = props;

    return (
        <div className="Login">
            <div className="Border">
                <form className="dialog-form" onSubmit={connectToAccount}>
                    <h1>Wordsmith</h1>
                    <h3 className="Header">Welcome!</h3>
                    <h3 className="Header">Добро пожаловать!</h3>
                    <h3 className="Header">欢迎</h3>

                    <div className="Credentials">
                        <input
                            id="userId"
                            className="username-input"
                            autoFocus
                            type="text"
                            name="userId"
                            value={userId}
                            onChange={handleInput}
                            placeholder="username"
                        />
                        <input
                            id="password"
                            className="password-input"
                            autoFocus
                            type="password"
                            name="password"
                            value={password}
                            onChange={handleInput}
                            placeholder="password"
                        />
                    </div>
                    <div>
                        <button type="submit" className="submit-btn">
                            <p>Login</p>
                        </button>
                        
                    </div>
                    <div className="Create" onClick={connectToCreateAccount}>
                <a href="">Need an account?</a>
                    </div>
                </form>
                
                </div>
        </div>
    );

}

Login.propTypes = {
    userId: Proptypes.string.isRequired,
    handleInput: Proptypes.func.isRequired,
    password: Proptypes.string.isRequired,
};

export default Login;