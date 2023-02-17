import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div>
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlfor='email'>email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='janedoe@email.com'
          id='email'
          name='email'
        />
        <label htmlfor='password'>password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='*****'
          id='password'
          name='password'
        />
        <button type='submit'>Login</button>
      </form>
      <Link to='/register'>Don't have an account? Register here.</Link>
    </>
  )
}
export default Login
