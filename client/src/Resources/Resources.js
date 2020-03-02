import React, { Component } from 'react'
// import fetch from 'isomorphic-fetch'
import Resource from '../components/Resource'
import './Resources.css'

class Resources extends Component {

  state = {
      search: ''
    }


  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  updateSearch = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    {/* Proof of concept - TODO:Refactor this filter */}
    let filteredResources = this.props.resources.filter(
      resource => {
        let description, title, author, categories, path, level;
        for(let i =0; i< resource.author.length; i++) {
          author = resource.author[i].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        if(resource.title) {
          title = resource.title.toLowerCase().indexOf(this.state.search.toLowerCase())!== -1
        }


        if(resource.description) {
          description = resource.description.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        if(resource.categories) {
          for(let j =0; j< resource.categories.length; j++) {
            //if category is a not a Number
            if(typeof resource.categories[j] === 'string'){
              categories = resource.categories[j].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            }
          }
        }

        if(resource.path) {
          for(let k =0; k< resource.path.length; k++) {
            //if category is a not a Number
            if(typeof resource.path[k] === 'string'){
              path = resource.path[k].toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1

            }
          }
        }

        if(resource.level) {
          level = resource.level.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        }

        return description || title || author || categories || path || level

      }
    );

    if(this.props.loading) {
      return (
        <div className="Resources">
        <div className="search-box">
          <input  type="text" placeholder="Enter Search Term(s)"
            value={this.state.search}
            onChange={this.updateSearch}
            ></input>
          </div>
          <div className="views-container">
            <button onClick={() => this.props.changeView('trendingResources')}  className='header-button'>Trending Resources</button>
            <span>|</span>
            <button onClick={() => this.props.changeView('newResources')} className='header-button'>New Resources</button>
          </div>
          <h2 className="loading">Loading...</h2>
      </div>

      )
    } else {
      return (
        <div className="Resources">
        <div className="search-box">
          <input  type="text" placeholder="Enter Search Term(s)"
            value={this.state.search}
            onChange={this.updateSearch}
            ></input>
          </div>
          <div className="views-container">
            <button onClick={() => this.props.changeView('trendingResources')}  className='header-button'>Trending Resources</button>
            <span>|</span>
            <button onClick={() => this.props.changeView('newResources')} className='header-button'>New Resources</button>
          </div>

          <ol className="resources">
            {
              filteredResources.map((resource, index) => <li className="list-item" key={resource._id}>
                <Resource {...resource} index={index} />
              </li>)
            }
          </ol>
      </div>
    )}
  }
}

export default Resources
