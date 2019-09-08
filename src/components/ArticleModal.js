import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'

class ArticleModal extends Component {
    constructor(props) {
      super(props)
      this.state = {
        articles: this.props.articles
      }
    }


//this render, renders the articles and mapping them to whatever detail is needed.
    render() {
        console.log(this.props.articles)
        return (
            <ListGroup>
            <div>
                {this.props.articles.map((item, index) => {
                    return (
                        <div className="col-md-6 overbox" key={index} >
                        <ListGroup.Item >
                        <h1>
                            {item.title}
                        </h1> 
                        <h3>
                            Author: {item.author}
                        </h3> 
                        <h4>
                            <a href={item.url}> Read More</a>
                        </h4>
                        <img src={item.urlToImage} className="hidden-sm hidden-xs center" alt=""> 
                        </img>
                        </ListGroup.Item>
                        </div>
                        )
                    }
                 )}
            </div>
            </ListGroup>   
          );
        }
    }

export default ArticleModal;