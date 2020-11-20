import React from 'react';
import thumb from '../../../images/profile-1.jpg'
import Prop_Types from 'prop-types'
import './Messages.css'


class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul className="messages">
               
            {
                  this.props.messages.map(message=>{
                    return <React.Fragment key={message.id} >
                        <li className="message" >
                        <div className="flex s-a">
                        <span><img src={thumb} alt="" className="img" /></span>
                         <div className="flex column">
                        <h3>{message.message}</h3>
                      <p className="last-msg"><span className="msg-status"></span>{message.lastMsg}</p>
                </div>
                        </div>
              <div className="flex rt-col column s-a">
              <div className="time-stamp">
                       <p>{message.timeStamp}</p>
                 </div>
                 <div className="act">
                   {
                       message.newMsg
                   }
                 </div>

              </div>
                         </li>
                 <hr className="bottom-divider" />

                    </React.Fragment>
                })
            }
              
            </ul>
        );
    }
}

Messages.Prop_Types={
    messages:Prop_Types.array.isRequired
}


export default Messages;
