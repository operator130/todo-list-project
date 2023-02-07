import React, { Component } from 'react';
import TodoList from './TodoList';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

class App extends Component {
  return(
    <HashRouter basename='/'>
      <div className="">
        <TodoList />
      </div>
    </HashRouter>
  );
  }

const TodoList = () => <div><h2>TodoList</h2></div>

export default App;
