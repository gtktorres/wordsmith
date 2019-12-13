import React from 'react';
import Proptypes from 'prop-types';
import RoomUsers from './components/RoomUsers';

const Account = props => {

    const { profilePic, username, suggested, previous, native, sendDM } = props;

    return (
        <div className="Account">
            <div className="Border" img={profilePic}>
                <h1>{username}</h1>
                <h1>`Native: {native}`</h1>

            </div>     
            <div className="List">
                <RoomUsers 
                sendDM={sendDM}
                />
            </div>

          
        </div>
      );
}

Account.propTypes = {
    profilePic: Proptypes.string.isRequired,
    handleInput: Proptypes.func.isRequired,
    suggested: Proptypes.string.isRequired,
    native: Proptypes.string.isRequired,

};

export default Account;