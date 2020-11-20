import React, { Component } from 'react';
import Header from './Header/Header'
import BreifMsg from './BriefMsg/BriefMsg'
import SearchBox from './SearchBox/SearchBox'
import Messages from './Messages/Messages'
import Prop_Types from 'prop-types'
import './Main.css'

class Main extends Component {
    state = {  }
    render() {
        return (
            <div className="main">
               <Header />
               <BreifMsg />
               <SearchBox />
               <Messages messages={this.props.messages} />
            </div>
        );
    }
}

Main.Prop_Types={
    messages:Prop_Types.array.isRequired
}


export default Main;