import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import GamesPage from './components/GamesPage';
import GameFormPage from './components/GameFormPage';

export default class App extends Component {
  render() {
    return (
      <div className="ui container">

        <div className="ui three item menu">
          <NavLink exact to="/" className="item" activeClassName="active item">Home</NavLink>
          <NavLink exact to="/games" className="item" activeClassName="active item">Games</NavLink>
          <NavLink exact to="/games/new" className="item" activeClassName="active item">Add New Game</NavLink>
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route path="/games/:_id" component={GameFormPage} />
        
      </div>
    );
  }
}
