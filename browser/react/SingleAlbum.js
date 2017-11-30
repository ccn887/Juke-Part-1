import React from 'react';
import ReactDOM from 'react-dom';

// const songInfo = (){
//   return(
//     <tr>
//     <td>
//       <button className="btn btn-default btn-xs">
//         <span className="glyphicon glyphicon-play"></span>
//       </button>
//     </td>
//     <td>{this.props.current.songs[id]}</td>
//     <td>{this.props.current.songs[id]}</td>
//     <td>I SHOULD BE A SONG GENRE</td>
//   </tr>

//   )
// }



class SingleAlbum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      greetings: 'Wooo!!!',
    }
  }
  render(){
    return (
      <div className="album col-xs-10">
        <div>
          <h3>{this.props.current.name}</h3>
          <img src={this.props.current.imageUrl}  className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
          {
             this.props.current.songs.map(song => {

              console.log('artists:', song.artists[0].name)
              return (
                <tr className={song.id === this.props.currentSong.id ? 'active' : ''}>
                <td>
                <div key={song.id}>
                  <button onClick = {() => {this.props.start(song.audioUrl, song)}} className={song.id === this.props.currentSong.id ? '.btn.disabled' : "btn btn-default btn-xs"} >
                    <span className="glyphicon glyphicon-play"></span>
                  </button>
                  </div>
                </td>
                <td>{song.name}</td>
                <td>{song.artists[0].name}</td>
                <td>{song.genre}</td>
                </tr>
              )
            }
            )
          }
          </tbody>
        </table>
      </div>
    )
  }
}




export default SingleAlbum
