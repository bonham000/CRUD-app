import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GamesPage from './components/GamesPage';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">

        <div className="ui three item menu">
          <Link className="item" activeClassName="active" to="/">Home</Link>
          <Link className="item" activeClassName="active" to="/games">Games</Link>
          <Link className="item" activeClassName="active" to="/games/new">Add New Game</Link>
        </div>

        <Route path="/games" component={GamesPage} />
        
      </div>
    );
  }
}
