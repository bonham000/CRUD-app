import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import GamesPage from './components/GamesPage';
import GameFormPage from './components/GameFormPage';

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route to={to} exact={activeOnlyWhenExact} children={({ match }) => {
    return <Link className={to === match.url ? 'active item' : 'item'} to={to}>{label}</Link>
  }}/>
)

export default class App extends Component {
  render() {
    return (
      <div className="ui container">

        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to="/" label="Home" />
          <ActiveLink activeOnlyWhenExact to="/games" label="Games" />
          <ActiveLink activeOnlyWhenExact to="/games/new" label="Add New Game" />
        </div>

        <Route exact={true} path="/games" component={GamesPage} />
        <Route path="/games/:_id" component={GameFormPage} />
        
      </div>
    );
  }
}
