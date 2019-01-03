import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      game_state : 0
    }
  }
//After render method
  componentDidMount() {
 
 }
 //  {this.state.info.map(artist => <li key={artist.releaseDate}>{artist.collectionName}</li>)}
  render() {
    return (
     <div className="app">
     <Header/>
     <Main/>
      </div>  
      
   
     );
    
}
}

export default App;
