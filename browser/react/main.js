import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import AllAlbums from './allAlbums'
import axios from 'axios';
import SingleAlbum from './SingleAlbum'

const audio = document.createElement('audio')

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: {}
    }
    this.showAlbums = this.showAlbums.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
    this.start = this.start.bind(this)
  }
  start (source, playing) {
    audio.src = source
    audio.load();
    audio.play();
    this.setState({currentSong: playing})
  }
  showAlbums(albums){
    this.setState({albums: albums})
  }
  deselectAlbum() {
    this.setState({selectedAlbum: {}})
  }
  handleClick(albumId){
    axios.get('/api/albums/' + albumId)
    .then(res => res.data)
    .then(data => this.setState({selectedAlbum: data}))
  }
  render() {
    return (
      <div>
      <div id="main" className="container-fluid">
        <Sidebar deselect= {this.deselectAlbum}/>
        <div className="col-xs-10">

        {this.state.selectedAlbum.id ?
        <SingleAlbum current={this.state.selectedAlbum} start={this.start} currentSong = {this.state.currentSong} />:
        <AllAlbums music={this.state.albums} handleIt={this.handleClick} />
      }
        <Footer />
        </div>
      </div>
      </div>
    )
  }
  componentDidMount(){
    const toJson = response => response.data;
    const log = console.log.bind(console);
    const logError = console.error.bind(console);

    axios.get('api/albums')
      .then(toJson)
      .then(data => this.showAlbums(data))
      .catch(logError);

  }
}

export default Main
