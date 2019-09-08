import React, { Component } from "react";
import './SearchEngine.css';
import ArticleModal from './ArticleModal'



class SearchEngine extends Component {
    constructor(props) {
      super(props)
      this.state = {
        source: 'null',
        articles: []
      }
    }

//using the search bar input after submitting.    
handleSubmit = (event) =>{
    event.preventDefault();
    const data = this.state
    console.log("final data is", data.articles)
    if(data.source === "null" && data.articles.length === 0){
        return ( alert("please enter a complete source name"))
    } else {
    this.getNewsBySource();
    }
}

//handling the search bar input
handleInputChange =(event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    })
}

//fetching the api from newsapi.org.
getNewsBySource = () => {
   var source = this.state.source;
    fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=47856f1d0e454a4e9b36da1df2fea9ec`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log("I NEED THIS", myJson.status)
    if(myJson.status === "ok"){  
    this.setState({
      articles: myJson.articles
    })
} else {
    return ( alert("please enter a familiar source name"))
}
  });
}
    
render() {
    return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleInputChange} name="source"/>
          <p><button>pick your source</button></p>
        </form>
        <ArticleModal articles={this.state.articles}></ArticleModal>
      </div>
    
      );

    }
}

export default SearchEngine;