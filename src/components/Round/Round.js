import React, { Component } from 'react';
import axios from 'axios';
import './Round.css';

class Round extends Component{
    constructor(props) {
        super(props);
        this.state = {
           artist : this.props.artist,
           artistId: this.props.artistId,
           albums : [],
           artwork : "",
           attemptCounter : this.props.attemptCounter
        }
    }

    //initalizing first artist album
    componentDidMount(){ 
        this.loadAlbums();
    }

    //loads 3 albums to state
    loadAlbums(){
        var tempAlbums = [];
        var filteredAlbums = [];
        var url = 'https://itunes.apple.com/search?term='+this.state.artist+'&entity=album';

        axios.get(url) // http request
        .then( response => {
            //filter the non relevant albums by uniqe key (artistID)
            filteredAlbums = response.data.results.filter((album =>{
                return this.state.artistId === album.artistId
                }));
    
            //choose 3 albums randomly
            for(var i = 0; i < 3; i++){
                var index = Math.floor(Math.random()*filteredAlbums.length);
                tempAlbums[i] = filteredAlbums[index]; // choose from filtered
                filteredAlbums.splice(index,1); // no repetition
            }
            
            // update state
            this.setState({
                albums : tempAlbums,
                artwork: tempAlbums[2].artworkUrl100
            }, function () {  
            });
        })
    }

    //updates artist name every round
    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){
            if(nextProps.artist !== this.props.artist){ //round has changed
                this.setState({
                    artist: nextProps.artist, // change artist
                    artistId: nextProps.artistId // update Id
                    }, function () {
                    this.loadAlbums(); //load albums
                });
            }

            this.setState({ // same round - next guess
                attemptCounter: nextProps.attemptCounter,
            },
            function () {   
            });
        }
    }
    
    render() {
        var attemptCounter = this.state.attemptCounter;
        //albums didnt uploaded yet
        if(this.state.albums.length === 0){ 
            return(
                <div></div>
            )
        }

        // albums are ready!
        else {
            if(attemptCounter === 0){ //first guess
                return(
                    <div>
                        <h4 className="album-name">{this.state.albums[0].collectionName}</h4>
                    </div>
                )
            }

            if(attemptCounter === 1){ // second guess
                return(
                    <div>
                        <h4 className="album-name">{this.state.albums[0].collectionName}</h4><br/>
                        <h4 className="album-name">{this.state.albums[1].collectionName}</h4>
                    </div>
                )
            }

            if(attemptCounter === 2){ //// third guess
                return(
                    <div>
                        <h4 className="album-name">{this.state.albums[0].collectionName}</h4><br/>
                        <h4 className="album-name">{this.state.albums[1].collectionName}</h4><br/>
                        <h4 className="album-name">{this.state.albums[2].collectionName}</h4>
                        <img className="artwork" src = {this.state.artwork} alt ="img"/>
                    </div>
                )
            }
        } // else
    }
}
        
export default Round;