import React from 'react'
import useInputState from './hooks/useInputState'

export default function Forms() {
  // Hook: [value, handleChange, reset]
  const [email, updateEmail, resetEmail] = useInputState('')
  // Hook: [value, handleChange, reset]
  const [password, updatePassword, resetPassword] = useInputState('')
  return (
    <div>
      <h1>Email is: {email}</h1>
      <input type='text' value={email} onChange={updateEmail} />
      <input type='text' value={password} onChange={updatePassword} />
      <button onClick={resetEmail}>Reset Email</button>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  )
}
