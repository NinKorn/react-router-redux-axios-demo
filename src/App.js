import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import TodoList from './pages/TodoList'
import './style/app.scss'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          {/* <span>首页</span> */}
          <Link to='/' >首页</Link>
          <Link to='/todolist' >TodoList</Link>
        </div>
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/todolist" component={TodoList} />
        </div>
      </div>
    </Router>
  );
}

export default App;
