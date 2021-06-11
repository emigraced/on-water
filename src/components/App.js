import React, {useReducer} from 'react'
import { Coordinates } from './Coordinates'
import { SelectPlayers } from './SelectPlayers'
import reducer from '../utils/reducer'

const App = () => {

  const initialState = {
      correctAnswer: {
          coords: null,
          answer: null
      },
      water: null,
      playerData: {
          numOfPlayers: 0,
          players: [{
              playerName: null,
              playerGuess: null,
              playerHasGuessed: false,
              score: 0
          }],
          numOfPlayersGuessed: 0
      }
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {correctAnswer, water, playerData} = store

  function setNumOfPlayers(number) {
    dispatch({
      type: 'setNumOfPlayers', 
      data: number
    })
  }

  function setPlayerGuess(string) {
    dispatch({
      type: 'setPlayerGuess',
      data: string
    })
  }

  function setPlayerName(string) {
    dispatch({
      type: 'setPlayerName',
      data: string
    })
  }

  return (
    <>
        <Coordinates correctAnswer={correctAnswer} water={water}/>
        <SelectPlayers playerData={playerData} setNumOfPlayers={setNumOfPlayers} setPlayerGuess={setPlayerGuess} setPlayerName={setPlayerName}/>
    </>
  )
}

export default App
