import React, { Component } from 'react'


class SearchBox extends Component {
  state = {
      search: ''
    }

  // handleSearch = event => {
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  // }
  //
  updateSearch = event => {
    this.setState({search: event.target.value})
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.handleSearch(this.state.search)
  }

  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.onSubmit}>
          <input  type="text" placeholder="Search Resources"
            value={this.state.search}
            onChange={this.updateSearch}
            ></input>
          </form>
        </div>
    )
  }
}

export default SearchBox
