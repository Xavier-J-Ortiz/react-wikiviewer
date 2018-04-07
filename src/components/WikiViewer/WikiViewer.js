import React, { Component } from 'react';
//import jsonp from 'jsonp';
//import axios  from 'axios'
//import WikiViewer from './logo.svg';
//import './App.css';
//import './WikiViewer.js';

class WikiViewer extends Component {

  constructor(props) {
    super(props);
    this.state = { queryAnswer : null};

    this.getSearchTerm = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        let searchURL = "https://en.wikipedia.org/w/api.php?origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + encodeURI(e.target.value) + "&format=json";
        console.log(searchURL);
        fetch(searchURL, { mode: 'no-cors' })
          .then( results => {
            return results;
          })
          .then( data => {
            this.setState({ queryAnswer: data.query });
          } );
      }
    };

  }
  render() {

    return (
      <div>
        <p>
          <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">click on me for a random article! <br/></a>
        </p>
        <form>
          <input type="text" name="searchTerm" onKeyPress={ this.getSearchTerm } /><br/>
        </form>
        <p>
          write in text box for a search<br/>
          { this.state.queryAnswer ? this.state.queryAnswer : ''  }
        </p>
      </div>
    );
  }
}

export default WikiViewer;
