import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import Footer from './footer';
import AllAlbums from './allAlbums'
import axios from 'axios';
import SingleAlbum from './SingleAlbum'



class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      selectedAlbum: {}
    }
    this.showAlbums = this.showAlbums.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  showAlbums(albums){
    this.setState({albums: albums})
  }
  handleClick(){
    this.setState({selectedAlbum: selectedAlbum})
  }
  render() {
    return (
      <div>
        <Sidebar />
        <AllAlbums music={this.state.albums} handleIt={this.handleClick}/>
        <SingleAlbum current={this.state.selectedAlbum}/>
        <Footer />
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
