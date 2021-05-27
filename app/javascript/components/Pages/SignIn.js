import React, {useState} from 'react'


const SignIn = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return(
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" >
          <label htmlFor="username">Username</label>
          <input className="form-control" type="text" name="username" id="username" value={formData.username}
            onChange={(e) => setFormData({...formData, username: e.target.value})} 
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