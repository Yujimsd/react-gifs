import React, { Component } from 'react';
import Gif from './gif.jsx'

class GifList extends Component {
  render() {
    return this.props.gifs.map(gif => {

      return <Gif id={gif.id} key={gif.id} changeGif={this.props.changeGif} />

    });
  }
}

export default GifList;
