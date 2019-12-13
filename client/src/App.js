import React from 'react';
import  Login  from './Login';

import { 
    handleInput,
    connectToAccount,
    connectToCreateAccount,
    sendDM 
} from './methods';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            userId: "",
            password: "",
            profilePic: null,
            showLogin: true,
            isLoading: false,
            language: 'en',
            suggested: [],
            previous: [],
            native: ""
        };

        this.handleInput = handleInput.bind(this);
        this.connectToAccount = this.connectToAccount.bind(this);
        this.connectToCreateAccount = this.connectToCreateAccount.bind(this);
        this.sendDM = sendDM.bind(this);
    }

    render() {
        
        const { userId,password,profilePic,suggested,previous,native } = this.state;

        return (

            <div className="App">
            
                <Login
                    userId={userId}
                    password={password}
                    handleInput={this.handleInput}
                    connectToAccount={this.connectToAccount}
                    connectToCreateAccount={this.connectToCreateAccount}
                />
            </div>
                
        );
    }
}

export default App;
