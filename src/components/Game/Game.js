import React, { Component } from 'react';
import Round from  './../Round/Round';
import FinalScore from  './../FinalScore/FinalScore';
import './Game.css';
import { Row, Col } from 'react-grid-system';

class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {  
            chosenArtists : this.props.randomArtist,
            chosenArtistsId : this.props.randomId,
            currentRound : 0,
            attemptCounter : 0,
            inputValue: "",
            points : 0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    //checks answer
    handleSubmit(event) { 
        const currRound = this.state.currentRound; 
        const chosenArtists = this.state.chosenArtists;
        const tempAttemptCounter = this.state.attemptCounter;
        var addPoints = this.state.points;

        if(currRound < 5){ 
            
            //Right answer
            if(chosenArtists[currRound]=== this.state.inputValue){
                switch(tempAttemptCounter){
                    case 0 :addPoints += 5; //first attempt
                            break;
                    case 1: addPoints += 3; // seconed attempt
                            break;
                    case 2: addPoints += 1; // third attempt
                            break;
                    default: break;
                }
              
                //continue to next round
                this.setState({
                    points: addPoints,
                    attemptCounter : 0,
                    currentRound : currRound + 1,
                    inputValue : ""
                })       
            } 

            // wrong answer
            else { 
                if(tempAttemptCounter === 2){ // 3 mistakes => continue to next round
                    this.setState({
                        attemptCounter : 0,
                        currentRound : currRound + 1,
                        inputValue : ""
                    })
                }
                else { //get next clue (album)
                    this.setState({
                        attemptCounter: tempAttemptCounter + 1,
                        inputValue : ""
                    })
                }   
            } 
        }
    } 

    render() {
        var currRound = this.state.currentRound;
        var attemptCounter = this.state.attemptCounter;
        var forXPoints = [5,3,1];
     
        if(currRound < 5){ //game
            return(
                <div className="game">
                    <br/>
                    <h1 className="round-num"><strong><u>Round {currRound+1}</u></strong></h1>
                    <br/><br/><br/><br/>
                    <Row className="Row">
                        <Col  xs={2} sm={2}/>
                        <Col className="col-left" xs={4} sm={4}>
                        <Round 
                            artist = {this.state.chosenArtists[currRound]}
                            artistId = {this.state.chosenArtistsId[currRound]}
                            attemptCounter = {this.state.attemptCounter}
                        />
                        </Col>
                        <Col className="col-right" xs={4} sm={4}>
                        <form>
                            <label>
                                For {forXPoints[attemptCounter]} points <br/>
                                Who's the Artist?<br/>
                                <h4>(Enter full name & Capital the first letter
                                <br/> Example: Beyonce)</h4>
                                <input className="input" type="text" value={this.state.inputValue} onChange={this.handleInputChange} /><br/><br/>
                            </label>
                        </form>
                        <button onClick={this.handleSubmit} className="my-btn">Check My Guess</button>
                        <div className="wraper">
                        <div className="box">
                           <h4><strong>Total Score: </strong> {this.state.points}</h4>
                        </div>  
                        </div>
                        </Col>
                        <Col xs={2} sm={2}/>                   
                    </Row>
                </div>    
            )
        }

        else { //end of game
            return(
            <FinalScore
            changeGameState = {this.props.changeGameState}
            points = {this.state.points}/>
            )
        }
    }
}

export default Game;