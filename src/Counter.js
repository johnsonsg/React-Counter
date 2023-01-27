import React, { useState } from 'react'

export default function Counter() {
  const [state, setState] = useState(0)
  console.log('Hi')

  return (
    <div>
      <button onClick={() => console.log('click')}>Hi shawn</button>
    </div>
  )
}
