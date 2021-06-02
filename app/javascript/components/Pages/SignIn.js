import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../../actions/auth'
import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'

const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  // @ts-ignore
  const auth = useSelector(state => state.auth)

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  if (auth) {<Redirect to="/" />}
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signIn(formData))
    history.push('/')
  }

  return(
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label htmlFor="email">Email</label>
          <input className="form-control" type="text" name="email" id="email" value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})} 
          />
        </div>
        <div className="form-group" >
          <label htmlFor="password">Password</label>
          <input className="form-control" type="password" name="password" id="password" value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})} 
          />
        </div>
        <input type="submit" value="Sign In" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default SignIn