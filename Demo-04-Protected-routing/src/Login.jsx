import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function Login(props) {
  const { from } = props.location.state || { from: { pathname: '/' } }
  console.log(from)
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    })
  }

  if (redirectToReferrer) {
    return (
      <Redirect to={from} />
    )
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

/* A fake authentication function */
export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
}
