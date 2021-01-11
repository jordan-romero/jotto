import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import HookActions from './actions/hookActions'
import Input from './Input'
import './App.css'

const reducer = (state, action) => {
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

  const setSecretWord = (secretWord) => 
  dispatch({type: "setSecretWord", payload: secretWord})

  React.useEffect(
    () => { HookActions.getSecretWord(setSecretWord) },
    []
  )

  if(!state.secretWord) {
    return (
      <div className='container' data-test='spinner'>
        <div className='spinner-border' role='status'>
          <span className='sr-only'> Loading...</span>
        </div>
        <p>Loading Secret Word</p>
      </div>
    )
  }

  return (
    <div className='container' data-test='component-app'>
      <h1>Jotto</h1>
        <Congrats success={false}/>
        <GuessedWords guessedWords={[ {guessedWord: 'train', letterMatchCount: 3 }]}/>
        <Input secretWord={state.secretWord} />
    </div>
  )
}

export default App


