import React, { Component } from 'react';
import './StartPage.css';

class StartPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
          play: true,
          pause: false
        }
    }

    render() {
        return (
          <div className = "StartPage">
            <br/><br/>
            <img
                src="https://cdn1.thr.com/sites/default/files/imagecache/list_landscape_960x541/2018/01/splash_grammys.jpg"
                alt="artists"
                className="artists-img"/>
            <br/><br/>
            <div>
              <button onClick={this.props.changeGameState} className="my-btn">LET'S PLAY</button>  
            </div>
            <br/><br/>
          </div>
        ); 
    }
};

export default StartPage;