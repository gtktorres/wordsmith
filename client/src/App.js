import React from 'react';
import  Login  from './Login';
import { handleInput } from './methods';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            userId: "",
            showLogin: true,
            isLoading: false,
            language: 'en',
        };

        this.handleInput = handleInput.bind(this);
    }

    render() {
        
        const userId = this.state;

        return (
            
                <Login
                  userId={userId}
                  handleInput={this.handleInput}
                  connectToChatkit={this.connectToChatkit}
                />
        );
    }
}

export default App;
