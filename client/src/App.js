import React, {Component} from 'react'
import axios from 'axios'
import Header from './Header'
import Resources from './Resources'
import Footer from './Footer'

class App extends Component {
  state = {
    history:null,
    total: null,
    limit: 10,
    page: 1,
    pages: null,
    loading: false,
    scrolling: false,
    trendingResources:[],
    newResources: [],
    currentView: 'newResources',
    search:''
  }

  componentDidMount() {
    this.setState({loading: true})
    this.loadTrendingResources()
    this.loadNewResources()
    this.scrollListener = window.addEventListener('scroll', (e) => {
      this.handleScroll(e)
    })
  }

  handleScroll = () => {
    const { scrolling, pages, page} = this.state
    if (scrolling) return
    if (pages <= page) return
    let lastLi = document.querySelector('ol.resources > li:last-child')
    if(lastLi) {
      let lastLiOffset = lastLi.offsetTop + lastLi.clientHeight
      let pageOffset = window.pageYOffset + window.innerHeight
      let bottomOffset = 3
      if (pageOffset > lastLiOffset - bottomOffset) {
        this.loadMore()
      }
    }

  }

  loadTrendingResources = () => {
    const { limit, page, trendingResources } = this.state
    let url = `/api/resources/trending?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        trendingResources: [...trendingResources, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
        loading: false
      })
    })
  }


  loadNewResources = () => {
    const { limit, page, newResources } = this.state
    let url = `/api/resources/new?limit=${limit}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
        newResources: [...newResources, ...json.docs],
        scrolling: false,
        pages: json.total_pages,
        loading: false
      })
    })
  }

  loadMore = () => {
    if(this.state.currentView === 'trendingResources') {
      this.setState(prevState => ({
        page: prevState.page+1,
        scrolling: true,
      }), this.loadTrendingResources)
    } else {
      this.setState(prevState => ({
        page: prevState.page+1,
        scrolling: true,
      }), this.loadNewResources)
    }
  }

  changeView = (currentView) => {
    this.setState({
      currentView: currentView
    })
  }

  handleSearch = (search) => {
    this.setState({
      search
    })
  }

  handleUrlSubmit = (event, url) => {
    // event.preventDefault()
    axios.post('/api/resources', { url: url, upvotes: 1, views: 0})
    .then( data => {
        console.log('form submitted, the following resource was added:', data)
        // history.push('/')
      });
  }



  render() {
    return (
      <div className="App">
        <Header
          handleUrlSubmit={(event, url) => this.handleUrlSubmit(event, url)}

          />
        <Resources
          resources={this.state[this.state.currentView]}
          handleSearch={(search) => this.handleSearch(search)}
          changeView={(changeView) => this.changeView(changeView)}
          search={this.state.search}
          loading={this.state.loading}
        />
        <Footer />
      </div>
    )
 }
}

export default App
