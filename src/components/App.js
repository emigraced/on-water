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
              playerId: null,
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

  return (
    <>
        <Coordinates correctAnswer={correctAnswer} water={water}/>
        <SelectPlayers playerData={playerData} setNumOfPlayers={setNumOfPlayers}/>
    </>
  )
}

export default App
