import React from 'react'
import TouchList from '../Touches/TouchList'
import NewTouch from '../Touches/New'
import { Link } from 'react-router-dom'

const Lead = () => {
  return(
    <div>
      <Link to="/leads">Back to leads</Link>
       <div>
        <div className="row banded--even">
          <div className="col">
              <p className="underline">Title</p>
              <p>PLACEHOLDER</p>
          </div> 
          <div className="col">
            <p className="underline">Company Name</p>
            <p>PLACEHOLDER</p>

            </div> 
          </div>
          <div className="row banded--odd">
            <div className="col">
              <p className="underline">Company URL</p>
              <p>PLACEHOLDER</p>

            </div> 
            <div className="col">
              <p className="underline">Job Listing URL</p>
              <p>PLACEHOLDER</p>

            </div> 
            <div className="col">
              <p className="underline">About Us URL</p>
              <p>PLACEHOLDER</p>

            </div> 
          </div>
          <div className="row banded--even">
            <div className="col">
              <p className="underline">Company Email</p>
              <p>PLACEHOLDER</p>

            </div> 
              <div className="col">
                <p className="underline">Contact First</p>
                <p>PLACEHOLDER</p>

              </div> 
              <div className="col">
                <p className="underline">Contact Last</p>
                <p>PLACEHOLDER</p>

              </div> 
              <div className="col">
                <p className="underline">Salary Range</p>
                <p>PLACEHOLDER</p>

            </div>
          </div>
          <div className="row banded--odd">
            <div className="col">
              <p className="underline">Cover Letter URL</p>
              <p>PLACEHOLDER</p>

            </div> 
            <div className="col">
              <p className="underline">Resume URL</p>
              <p>PLACEHOLDER</p>

            </div> 
          </div>
          <div className="row banded--even">
            <div className="col">
              <p className="underline">Notes</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>

          <div>
            <button className="btn btn-primary btn-block mt-4"> Edit Lead </button>
          </div>
        </div>

        <div>
          <h2>Activity Log</h2> 
          <hr />
          <NewTouch />
          <br />
          <TouchList />
        </div>
    </div>
  )
}

export default Lead;