import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import './App.css'

const reducer = (state, action) {
  switch(action.type) {
    case "setSecretWord":
        return { ...state, secretWord: action.payload }
      default: 
        throw new Error(`Invalid action type: ${action.type}`)
  }
}

const App = () => {

  const [state, dispatch] = React.useReducer(
    reducer, 
    { secretWord: null }
    )
  return (
    <div className='container' data-test='component-app'>
      <h1>Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[ {guessedWord: 'train', letterMatchCount: 3 }]}/>
    </div>
  )
}

export default App


