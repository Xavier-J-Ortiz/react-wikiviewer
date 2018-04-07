import React, { Component } from 'react';
//import WikiViewer from './logo.svg';
//import './App.css';
//import './WikiViewer.js';

class WikiViewer extends Component {
  render() {
    return (
      <p className="Main">
        <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">click on me for a random article! <br/></a>
        <form>
          <input type="text" name="searchTerm"/><br/>
        </form>
        write in text box for a search<br/>
      </p>
    );
  }
}

export default WikiViewer;
