import React, { Component } from 'react';
import './Instructions.css';

class Instructions extends Component{
   
    render() {
        return (
          <div className = "Instructions">
            <br/><h1><strong><u>HOW TO PLAY?</u></strong></h1><br/><br/>
              <p>
                The game has 5 rounds<br/>
                Each round, a famous artist/band is chosen<br/>
                You will have 3 attempts to guess who is the artist<br/>
                In each attempt an album name of the artist will appear on the screen<br/>
                <br/>
                <strong>first</strong> attempt is worth <strong>5 points</strong><br/>
                On the <strong>second</strong>, you get <strong>3 points</strong><br/>
                and in the <strong>last</strong> you get <strong>1 point</strong> for a correct answer.
              </p><br/><br/><br/>    
            <div>
              <button onClick={this.props.changeGameState} className="my-btn">GOT IT!</button>  
            </div><br/><br/>  
          </div>
        ); 
    }
};

export default Instructions;