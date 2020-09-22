import React, { Component } from 'react';
import giphy from 'giphy-api';

import Search from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifID: "1hAZTkpyspqD2OSRva"
    };

    this.search("anime")
  }

  search = (query) =>{
    giphy("9QFAvw0hCkpTEzzljcDDIo1f6Q3Fgb3M").search({
      q: query,
      rating: 'g',
      limit: 5
    },(err, res) => {
        // Res contains gif data!
        this.setState({ gifs:res.data});

    });
  }

  changeGif = (seleGifId) =>{
    this.setState({
      selectedGifID: seleGifId
    });
  }

  render() {

    return (
      <div>
        <div className="left-scene">
          <Search search={this.search}/>
          <div className="selected-gif">
            <Gif id = {this.state.selectedGifID }/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeGif={this.changeGif}/>
        </div>
      </div>
    );
  }
}

export default App;
