import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routers/router'
import './style/app.scss'
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Link to='/' >首页</Link>
          <Link to='/todolist' >TodoList</Link>
        </div>
        <div className="main">
          {
            routes.map((route, key) => {
              return (
                <Route
                  exact
                  key={key}
                  path={route.path}
                  render={props => (
                    <route.component {...props} routes={route.routes} />
                  )} />
              )
            })
          }
        </div>
      </div>
    </Router>
  );
}

export default App;
