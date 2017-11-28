import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      greetings: 'Wooo!!!',
    }
  }
  render() {
    return (
      <div className="col-xs-2">
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#">ALBUMS</a>
            </h4>
          </section>
        </sidebar>
      </div>
    )
  }
}


export default Sidebar


