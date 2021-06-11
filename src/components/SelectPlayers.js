import React from 'react'
import {PlayerCard} from './PlayerCard'

export const SelectPlayers = ({playerData, setNumOfPlayers, setPlayerGuess, setPlayerName}) => {

    const {numOfPlayers, players} = playerData

    function handleSelection(event) {
        setNumOfPlayers(event.target.value)
    }

    let players = []
    if (numOfPlayers) {
        for (let i = 1; i <= numOfPlayers; i++) {
            players.push(<PlayerCard id={i} key={`player ${i}`} players={players} setPlayerGuess={setPlayerGuess} setPlayerName={setPlayerName}/>)
        }
    }

    return (
        <div>
            {!numOfPlayers && 
                <>
                <h2>Select the number of players:</h2>
                <select value={!numOfPlayers ? "select" : numOfPlayers} onChange={handleSelection}>
                    <option value="select">-select-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                </>
            }
            {numOfPlayers && players}
        </div>
    )
}
