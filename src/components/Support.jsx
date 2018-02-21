import React, { Component } from 'react';
import './Support.css'

class Support extends Component {

  render() {
    return (
      <div className="support">
        <div className="social">
          <div className="item">
            <a href="https://www.reddit.com/r/havenprotocol/" target="_blank"><i className="fa fa-reddit" aria-hidden="true"></i></a>
          </div>
          <div className="item">
            <a href="https://twitter.com/HavenProtocol" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <div className="item">
            <a href="https://github.com/havenprotocol" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Support;
