import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GamesPage from './components/GamesPage';
import GameFormPage from './components/GameFormPage';

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
        <Route exact={true} path="/games/:_id" component={GameFormPage} />
        
      </div>
    );
  }
}
