import React, { useEffect } from 'react'
import { signOut } from '../../actions/auth'
import { useDispatch } from 'react-redux'

const SignOut = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(signOut())
  }, [])

  return(
    <div>You are now signed out</div>
  )
}

export default SignOut