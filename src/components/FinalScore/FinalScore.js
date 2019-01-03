import React, { Component } from 'react';
import './FinalScore.css';
import { Row, Col } from 'react-grid-system';

class FinalScore extends Component{
    constructor(props) {
        super(props);
        this.state = {
            points: this.props.points
        }
    }

    //conditional rendering by final score range
    render() { 
        var final_points = this.props.points;
        if(final_points > 19){
            return (
                <div className="final-score" >
                    <Row className="Row">
                        <Col className="col-left" xs={1} sm={1}/>     
                        <Col className="col-left" xs={4} sm={4}>                  
                        <img
                        src="https://cdn.pixabay.com/photo/2017/08/16/22/29/excited-2649320_960_720.jpg"
                        alt="final"
                        width="500" height="350"
                        className="final-img"/>
                        </Col>
                        <Col className="col-right" xs={5} sm={5}>
                            <h1><strong><u>YOUR FINAL SCORE IS:</u> {final_points}</strong></h1>
                            <h2>WOW!</h2>
                            <h4>You are a musical genius</h4>
                            <h4>you know all the artists!!!</h4> 
                            <div><br/>
                                <button onClick={this.props.changeGameState} className="my-btn">PLAY AGAIN</button>  
                            </div>  
                        </Col>
                        <Col className="col-left" xs={2} sm={2}/>   
                    </Row>                
                </div>
            ); 
        }
        if( final_points <20 && final_points>9){
            return (
                <div className="final-score" >
                    <Row className="Row">
                        <Col className="col-left" xs={1} sm={1}/>     
                        <Col className="col-left" xs={4} sm={4}>                  
                        <img
                        src="https://cdn.pixabay.com/photo/2017/06/09/05/21/ok-2385794_960_720.jpg"
                        alt="final"
                        width="500" height="350"
                        className="final-img"/>
                        </Col>
                        <Col className="col-right" xs={5} sm={5}>
                            <h1><strong><u>YOUR FINAL SCORE IS:</u> {final_points}</strong></h1>
                            <h2>Good for you!</h2>
                            <h4>ou have some knowledge in the music field. </h4>
                            <h4>Go and enrich your mind with some more music!</h4> 
                            <div><br/>
                                <button onClick={this.props.changeGameState} className="my-btn">PLAY AGAIN</button>  
                            </div>  
                        </Col>
                        <Col className="col-left" xs={2} sm={2}/>   
                    </Row>                
                </div>
            );
        }
        else{ 
            return (
                    <div className="final-score" >
                        <Row className="Row">
                            <Col className="col-left" xs={1} sm={1}/>     
                            <Col className="col-left" xs={4} sm={4}>                  
                            <img
                            src="https://cdn.pixabay.com/photo/2018/02/02/21/44/excited-3126453_960_720.jpg"
                            alt="final"
                            width="500" height="350"
                            className="final-img"/>
                            </Col>
                            <Col className="col-right" xs={5} sm={5}>
                                <h1><strong><u>YOUR FINAL SCORE IS:</u> {final_points}</strong></h1>
                                <h2>Seriously?</h2>
                                <h4>Nice try, but not good enough</h4>
                                <h4>Go and listen to more MUSIC!</h4> 
                                <div><br/>
                                    <button onClick={this.props.changeGameState} className="my-btn">PLAY AGAIN</button>  
                                </div>  
                            </Col>
                            <Col className="col-left" xs={2} sm={2}/>   
                        </Row>                       
                    </div>
            );

        }
    }
};

export default FinalScore;