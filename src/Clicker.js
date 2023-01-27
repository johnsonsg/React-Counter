import React, { useState, useEffect } from 'react'

function Clicker(props) {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
}

export default Clicker
