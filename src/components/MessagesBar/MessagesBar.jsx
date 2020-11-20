import React, { Component } from 'react';
import Illustration from '../../images/Capture.PNG'
import './MessagesBar.css'

class MessagesBar extends Component {
    state = {  }
    render() {
        return (
            <div className="messagesbar flex column s-a">
           <img src={Illustration} className="img-bg" />
           <div style={{
               transform:'translateY(-100px)'
           }}>
               <p style={{
                   fontSize:'40px',
                   fontWeight:'thin',
                   color:'#aaa'
               }}>Keep Your Phone Connected</p>
           </div>
            </div>
        );
    }
}

export default MessagesBar;