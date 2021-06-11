import React, {useReducer, useEffect} from 'react'
import { Coordinates } from './Coordinates'
import { SelectPlayers } from './SelectPlayers'
import reducer from '../utils/reducer'

const App = () => {

  
  const initialState = {
    correctAnswer: {
      coords: '',
      lat: null,
      long: null,
      answer: null,
      isSet: false
    },
    playerData: {
      numOfPlayers: null,
      players: [],
      numOfPlayersGuessed: 0
    }
  }
  
  const [store, dispatch] = useReducer(reducer, initialState)
  const {correctAnswer, playerData} = store
  
  useEffect( ()=>{
    console.log("initialState",initialState)
    console.log("store", store)
  },)

  function setCorrectAnswer(answer){
    dispatch({type: 'setCorrectAnswer', data: answer})
  }

  /*functions for updating player data require two arguments:
  the playerId and value for helper functions in reducer. */
  function setPlayerGuess(playerId, value){
    dispatch({
      type: 'setPlayerGuess',
      // send through object to reducer
      data: {
        id: playerId,
        guess: value
      }
    })
    dispatch({type: 'setPlayerAsGuessed', data: {id: playerId, bool: true}})
  }
  
  function setPlayerName(playerId, value){
    dispatch({type: 'setPlayerName', data: {id: playerId, name: value}})
  }

  // commented out to stop warnings, until feature is added
/*  function setPlayerScore(playerId, value){
    dispatch({type: 'setPlayerScore', data: {id: playerId, score: value}})
  }*/

  function setNumOfPlayers(number) {
    dispatch({
      type: 'setNumOfPlayers', 
      data: number
    })
  }

  return (
    <>
        <Coordinates correctAnswer={correctAnswer} setCorrectAnswer={setCorrectAnswer} />
        <SelectPlayers playerData={playerData} setNumOfPlayers={setNumOfPlayers} setPlayerGuess={setPlayerGuess} setPlayerName={setPlayerName}/>
    </>
  )
}

export default App
