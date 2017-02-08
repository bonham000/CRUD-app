import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GamesPage from './components/GamesPage';
import GamesForm from './components/GamesForm';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">

        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/games">Games</Link>
          <Link className="item" to="/games/new">Add New Game</Link>
        </div>

        <Route exact={true} path="/games" component={GamesPage} />
        <Route path="/games/new" component={GamesForm} />
        
      </div>
    );
  }
}
