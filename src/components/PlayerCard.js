import React, {useState} from 'react'
import {PlayerCardStyled, PlayerCardContainer} from '../components/styled/Styled'

export const PlayerCard = ({id}) => {

    const [playerGuess, setPlayerGuess] = useState("")
    const [playerName, setPlayerName] = useState(`Player ${id}`)
    const [input, setInput] = useState("")

    function handleButton(event) {
        setPlayerGuess(event.target.value)
    }

    function handleInputChange(event) {
        setInput(event.target.value)
    }
        
    function handleCustomNameSubmit(event) {
        event.preventDefault()
        input && setPlayerName(input)
        setInput("")
    }

    return (
     
        <PlayerCardStyled>
            <h3 className="player-name">{playerName}</h3>
            <form onSubmit={handleCustomNameSubmit}>
                <input value={input} id="inputField" type="text" placeholder="Your Name Here" onChange={handleInputChange} className="input-field"/>
                <input type="submit" className="play-button"/>
            </form>
            <h4>Lock in your guess:</h4>
            {!playerGuess &&
                <>
                <button value="Land" onClick={handleButton} className="play-button">Land</button>
                <button value="Water" onClick={handleButton} className="play-button">Water</button>
                </>
            }
            {playerGuess && <p className="player-guess">{playerName} chose: {playerGuess}</p>}
        </PlayerCardStyled>

   )   
}
