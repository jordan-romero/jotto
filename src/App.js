import React from 'react'
import GuessedWords from './GuessedWords'
import Congrats from './Congrats'
import hookActions from './actions/hookActions'
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
    () => { hookActions.getSecretWord(setSecretWord) },
    []
  )

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


