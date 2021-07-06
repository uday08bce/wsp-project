import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import ArticlesList from './components/ArticlesList';
import SearchBox from './components/SearchBox/SearchBox';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';



class App extends Component {
  constructor() {
    super()
    this.state = {
      articles : [],
      searchfield : ``  
    }
  }

  componentDidMount () {
    fetch('./wsp.json')
      .then(response =>  response.json())
      .then(article => this.setState({articles:article}))
  }

  

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value}) 
  }

  render() {
    const { articles, searchfield } = this.state;
    const filteredArticles = articles.filter(articles => {
      return (articles.title.toLowerCase().includes(searchfield.toLowerCase()) || articles.summary.toLowerCase().includes(searchfield.toLowerCase()));
    })

    return (
        <div className='tc'>
          <div>
              <Navigation/>
              <SearchBox searchChange={this.onSearchChange}/>
          </div>
          <div>          
            <ErrorBoundary>              
                <ArticlesList articles = {filteredArticles} />
            </ErrorBoundary>
          </div>
        </div>
      );
  }
}

export default App;