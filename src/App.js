import React, { Component } from 'react';
import TodoList from './TodoList';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          <TodoList />
        </div>
      </HashRouter>
    );
  }
}


export default App;
