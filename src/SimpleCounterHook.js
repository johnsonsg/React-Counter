import React from 'react'
import useCountState from './hooks/useCountState'

export default function Counter() {
  // Hook: [value, increment]
  const [count, increment] = useCountState(0)
  return (
    <div>
      <h1>The Count is: {count}</h1>
      <button onClick={increment}>Click to Count</button>
    </div>
  )
}
