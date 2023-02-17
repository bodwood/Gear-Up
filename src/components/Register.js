import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [firstName, setFirstName] = useState('')
 const [lastName, setLastName] = useState('')

   const handleSubmit = (e) => {
     e.preventDefault()
   }

  return (
    <>
      <div>
        <h1>Register</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlfor='firstName'>First Name</label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder='First Name'
          id='firstName'
          name='firstName'
        />
        <label htmlfor='lastName'>Last Name</label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Last Name'
          id='lastName'
          name='lastName'
        />
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
      <Link to='/login'>
        Already have an account? Login here.
      </Link>
    </>
  )
}
export default Register