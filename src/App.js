import React, { Component } from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import './App.css'

const App = () => {
  return (
    <div className='container'>
      <h1>Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[ {guessedWord: 'train', letterMatchCount: 3 }]}/>
    </div>
  )
}

export default App


