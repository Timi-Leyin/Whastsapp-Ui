import React, { Component } from 'react';
import './BriefMsg.css'
class BriefMsg extends Component {
    state = {  }
    render() {
        return (
            <div className="brief-msg">
               <span className="fa fa-bell-slash"></span>
                <div>
                    <h3>Get Notified of new Messages</h3>
                    <p><a href="">Turn on Desktop Notifications &#10097;</a></p>
                </div>
            </div>
        );
    }
}

export default BriefMsg;