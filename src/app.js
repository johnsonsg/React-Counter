import React from 'react'
import Counter from './SimpleCounterHook'
import Forms from './SimpleFormInputHook'
import Toggler from './SimpleToggleHook'
import Clicker from './Clicker'
import SWMovies from './SWMovies'

export default function app() {
  return (
    <div style={{ textAlign: 'center' }}>
      {/* <Counter /> */}
      {/* <Toggler /> */}
      {/* <Forms /> */}
      <SWMovies />
    </div>
  )
}
