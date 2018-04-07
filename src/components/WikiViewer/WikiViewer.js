import React, { Component } from 'react';
//import WikiViewer from './logo.svg';
//import './App.css';
//import './WikiViewer.js';

class WikiViewer extends Component {

  constructor(props) {
    super(props);

    this.getSearchTerm = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        let searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURI(e.target.value) + "&limit=10&namespace=0&format=json";
        console.log(searchURL);
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
        </p>
      </div>
    );
  }
}

export default WikiViewer;
