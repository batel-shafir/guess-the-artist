import React, { Component } from 'react';
import StartPage from './StartPage/StartPage';
import Game from './Game/Game';
import Instructions from './Instructions/Instructions';

class State extends Component{
    artistsList = [
        "Beyonce", //1419227
        "U2" , //78500
        "Beatles",//136975
        "Queen", //3296287
        "Muse", //1093360
        "Oasis", //512633
        "Maddona", //20044
        "Prince" , //155814
        "Pink", //4488522
        "Rihanna", //63346553
        "Drake", //271256
        "Weezer", //115234
        "Ciara", //14317116
        "Toto", //462614
        "Cher", //106158
        "Shpongle", //4695467
        "ABBA", //372976
        "Adele", //262836961
        "Sting", //94804
        "Aerosmith" //115386
    ]

    artistIdList = [1419227, 78500, 136975, 3296287, 1093360,
                    512633 , 20044, 155814, 4488522, 63346553,
                    271256 , 115234,14317116,462614, 106158,
                    4695467, 372976,262836961,94804, 115386
    ]

    constructor(props) {  
        super(props);
        this.state = {
            gameState: 0,   
            randomArtists : [],
            randomArtistsId : []
        }
    }

   
    componentDidMount(){ 
        this.chooseArtists();
    }

    // initalize game - chooses 5 artists from the 20 list
    chooseArtists(){
        var listOfArtists = this.artistsList.slice(); //copy of artists list
        var listOfArtistsId = this.artistIdList.slice();//copy of artist Id List
        var randomlyChosenArtists = [];
        var randomlyChosenArtistsId = [];
        
        //choose artists randomly 
        for(var i = 0; i < 5; i++){
            var index = Math.floor(Math.random()*listOfArtists.length); // random idx
            randomlyChosenArtists[i] = listOfArtists[index]; // random artist
            randomlyChosenArtistsId[i] = listOfArtistsId[index]; // matched id
            listOfArtists.splice(index,1); // remove from list - no repetition
            listOfArtistsId.splice(index,1); // 
        }
       
        this.setState({
             randomArtists : randomlyChosenArtists,
             randomArtistsId: randomlyChosenArtistsId
            })
    }

    //Start page
    changeGameState0(){
        this.chooseArtists();
        this.setState({
            gameState : 0
        })
    }

    //Instructions page
    changeGameState1(){
        this.setState({
            gameState : 1
        })
    }

    //Game page
    changeGameState2(){
        this.setState({
            gameState : 2
        })
    }

    //conditional rendering
    render() {
        const gameState = this.state.gameState;
        
        if(gameState === 0){ //Start page
            return (
                <StartPage
                changeGameState = {this.changeGameState1.bind(this)}/>
            );
        }

        if(gameState === 1){ // Instructions
            return (
                <Instructions
                changeGameState = {this.changeGameState2.bind(this)}/>  
            );
        }

        if(gameState === 2){ // Game
            return (
                <Game
                randomArtist = {this.state.randomArtists}
                randomId = {this.state.randomArtistsId}
                changeGameState = {this.changeGameState0.bind(this)}/>               
            );
        }  
    }
}

export default State;