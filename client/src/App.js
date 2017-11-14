import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Panel from './component/Panel';


class App extends Component {
  // componentDidMount(){
  //   fetch('/users')
  //     .then()(res => res.json())
  // }

  render() {
    return (
    
      <div className="App">
        <Navbar />
        <Header />
        <Panel />
      </div>
    );
  }
}

export default App;
