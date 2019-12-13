import React from 'react';
import  Login  from './Login';
import { handleInput } from './methods';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            userId: "",
            password: "",
            showLogin: true,
            isLoading: false,
            language: 'en',
        };

        this.handleInput = handleInput.bind(this);
    }

    render() {
        
        const { userId,password } = this.state;

        return (
            
                <Login
                  userId={userId}
                  password={password}
                  handleInput={this.handleInput}
                />
        );
    }
}

export default App;
