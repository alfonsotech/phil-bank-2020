import React, { Component } from 'react'
import SubmitBox from '../components/SubmitBox'
import "./Header.css"

class Header extends Component {

  render() {
      return (
        <div className="Header">
          <div>
            <a href="/"><h1>Philosophy Bank <small><small>(beta)</small></small></h1></a><small><small>Crowdsourced & Upv♥ted By You</small></small>
          </div>
          <div>
            <SubmitBox handleUrlSubmit={(event, url) => this.props.handleUrlSubmit(event, url)} />
          </div>
        </div>





      )
    }
  }

export default Header
