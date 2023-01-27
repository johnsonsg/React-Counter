import React from 'react'
import Counter from './SimpleCounterHook'
import Forms from './SimpleFormInputHook'
import Toggler from './SimpleToggleHook'
import Clicker from './Clicker'
import SWMovies from './SWMovies'
import './App.css'

export default function app() {
  return (
    <div className='App'>
      {/* <Counter />
      <Toggler />
      <Forms />
      <Clicker />*/}
      <SWMovies />
    </div>
  )
}
