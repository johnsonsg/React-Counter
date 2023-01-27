import React from 'react'
import Counter from './SimpleCounterHook'
import Forms from './SimpleFormInputHook'
import Toggler from './SimpleToggleHook'
import Clicker from './Clicker'

export default function app() {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* <Counter />
      <Toggler />
      <Forms /> */}
      <Clicker />
    </div>
  )
}
