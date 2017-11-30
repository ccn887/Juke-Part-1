import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import Footer from './footer';

const albumsList = ({album,handleIt}) => {
  return (
    <div className="col-xs-4">
      <a onClick={() => handleIt(album.id)} className="thumbnail" href="#">
        <img src={album.imageUrl} />
        <div className="caption">
          <h5>
            <span>{album.name}</span>
          </h5>
          <small>{album.songs.length}</small>
        </div>
      </a>
    </div>
  )
}

const AllAlbums = ({music,handleIt}) => {
  return (
    <div className="row">
<h3>Albums</h3>

          <div>
            {
              music.map((album) => {
              return (
                <div key={album.id}>
                  {albumsList({album,handleIt})}
                  </div>
              )
            })
            }
          </div>
        </div>

  )
}

export default AllAlbums;
