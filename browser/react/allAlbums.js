import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import Footer from './footer';

const albumsList = (props) => {
  return (
    <div className="col-xs-4">
      <a className="thumbnail" href="#">
        <img src={props.imageUrl} />
        <div className="caption">
          <h5>
            <span>{props.name}</span>
          </h5>
          <small>{props.songs.length}</small>
        </div>
      </a>
    </div>
  )
}

const AllAlbums = ({music,handleIt}) => {
  return (
    <div id="main" className="container-fluid">
      <div className="col-xs-10">
        <h3>Albums</h3>
        <div className="row">
          <div>
            {
              music.map((album) => {
              return (
                <div key={album.id}>
                  {albumsList(album)}
                  <a onClick={() => handleIt(album)}></a>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllAlbums;
