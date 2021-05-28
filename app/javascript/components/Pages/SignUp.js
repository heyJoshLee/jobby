import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../../actions/users'
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser({user: formData}))
    history.push('/leads')
  }

  return(
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label htmlFor="email">Email</label>
          <input className="form-control" type="email" name="email" id="email" value={formData.email}
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

export default SignUp