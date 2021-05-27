import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Lead from './Leads/Lead'
import Leads from './Leads/Leads'
import NewLead from './Leads/New'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import SignOut from './Pages/SignOut'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Leads}/>
      <Route exact path='/leads' component={Leads}/>
      <Route exact path='/leads/new' component={NewLead} />
      <Route exact path='/leads/:slug' component={Lead}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/signout' component={SignOut}/>
    </Switch>
  )
}

export default App