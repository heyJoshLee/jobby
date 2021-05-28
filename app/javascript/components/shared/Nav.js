import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => {
  // @ts-ignore
  const auth = useSelector(state => state.auth)

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Jobby</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          { !auth ? (
            <>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">Sign In</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/leads" className="nav-link">Leads</Link>
              </li>
              <li className="nav-item">
                <Link to="/signout" className="nav-link">Sign Out</Link>
              </li>
          </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Nav