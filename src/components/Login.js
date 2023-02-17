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
      <article className='login-container'>
      <form onSubmit={handleSubmit} className='login-form'>
        <label htmlfor='email'>email</label>
        <input
          className='input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='janedoe@email.com'
          id='email'
          name='email'
        />
        <label htmlfor='password'>password</label>
        <input
          className='input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='*****'
          id='password'
          name='password'
        />
        <button type='submit'>Login</button>
      </form>
      <Link to='/register' className='links'>
        Don't have an account? Register here.
      </Link>
      </article>
    </>
  )
}
export default Login
