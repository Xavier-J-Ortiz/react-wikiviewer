import React, { Component } from 'react';
//import WikiViewer from './logo.svg';
//import './App.css';
//import './WikiViewer.js';

class WikiViewer extends Component {
  render() {
    return (
      <p className="Main">
        click on me for a random article! <br/>
        <form>
          <input type="text" name="searchTerm"/><br/>
        </form>
        write in text box for a search<br/>
      </p>
    );
  }
}

export default WikiViewer;
