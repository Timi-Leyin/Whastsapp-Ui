import React, {Component} from 'react';
import Main from './components/Main/Main'
import MessagesBar from './components/MessagesBar/MessagesBar'
import './App.css';

class App extends Component {
  state = { 
    messages:[
      {
        id:0,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        newMsg:122,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:1,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        newMsg:9,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:2,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        newMsg:null,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:3,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        newMsg:12,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:4,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        newMsg:342,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:5,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        newMsg:989,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:6,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:7,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:8,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:9,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
      {
        id:10,
        message:'Timileyin',
        img:'',
        lastMsg: 'hello',
        sent:true,
        timeStamp:`${new Date().getHours()} : ${new Date().getMinutes()} AM`
      },
    ]
   }
  render() {
    return (
      <div className="app">
        <Main messages={this.state.messages} />
      <MessagesBar />
      </div>
    );
  }
}

export default App;

