import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../history'

import Home from './Home'
import UserActions from './UserActions'
import Profile from './Profile'
import AddList from './AddList'
import Login from './Login'
import Table from './Table'

class App extends React.Component {
  render() {
    return (    
      <div>
        <Router history={history}>         
          <Switch>
            <Route path="/" exact component={Home} />   
            <Route path="/profile" exact component={Profile} />   
            <Route path="/useractions" exact component={UserActions} />  
            <Route path="/addlist" exact component={AddList} />  
            <Route path="/login" exact component={Login} /> 
            <Route path="/table" exact component={Table} />        
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App