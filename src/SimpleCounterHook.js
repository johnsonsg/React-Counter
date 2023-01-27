import React from 'react'
import useCountState from './hooks/useCountState'

export default function Counter() {
  const [count, setCount] = React.useState(0)
  // const [count, increment] = useCountState(0)
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Click to Count</button>
      {/* <button onClick={increment}>Click to Add</button> */}
    </div>
  )
}
