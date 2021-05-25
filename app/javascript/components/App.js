import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Lead from './Lead/Lead'
import Leads from './Leads/Leads'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Leads}/>
      <Route exact path='/leads/:slug' component={Lead}/>
    </Switch>
  )
}

export default App