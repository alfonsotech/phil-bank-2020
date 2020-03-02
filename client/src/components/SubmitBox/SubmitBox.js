import React, { Component } from 'react'

export default class SubmitBox extends Component {

  state = {
      url: '',
      count: 0,
      canSubmit: true
    }

    onChange = event => {
      const { name, value } = event.target
      this.setState({
        [name]: value
      })
    }

  render() {
    return (

      <form onSubmit={(event, url) => this.props.handleUrlSubmit(event, this.state.url)}>
        <input
          className="form-control"
          type="text"
          value={this.state.url}
          name="url"
          placeholder="Paste In Resource URL"
          onChange={this.onChange}
          required
        />
        <button disabled={!this.state.canSubmit} type="submit">Submit</button>
      </form>
    )
  }
}
