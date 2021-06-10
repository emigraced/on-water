import React, {useState} from 'react'
import {PlayerCard} from './PlayerCard'

export const SelectPlayers = () => {

    const [playerNumber, setPlayerNumber] = useState("")

    function handleSelection(event) {
        setPlayerNumber(event.target.value)
    }

    let players = []
    if (playerNumber) {
        for (let i = 1; i <= playerNumber; i++) {
            players.push(<PlayerCard name={i} key={`player ${i}`}/>)
        }
    }

    return (
        <div>
            {!playerNumber && 
                <>
                <h2>Select the number of players:</h2>
                <select value={!playerNumber ? "select" : playerNumber} onChange={handleSelection}>
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
            {playerNumber && players}
        </div>
    )
}
