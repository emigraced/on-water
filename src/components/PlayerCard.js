import React, {useState} from 'react'
import {PlayerCardStyled} from '../components/styled/Styled'

export const PlayerCard = ({id, onWater}) => {

    const [playerGuess, setPlayerGuess] = useState("")
    const [playerName, setPlayerName] = useState(`Player ${id}`)
    const [input, setInput] = useState("")
    let displayGuess = false
    // let guessResult = ""

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

    function toggleAnswer() {
        displayGuess = displayGuess ? false : true
    }

    if ((playerGuess === "Water" && onWater === true) || (playerGuess === "Land" && onWater === false)) {
        console.log(`${[playerName]} guessed right!`)
        // guessResult = "correct"
    } else if ((playerGuess === "Water" && onWater === false) || (playerGuess === "Land" && onWater === true)) {
        console.log(`Wamp wamp... ${[playerName]} guessed wrong`)
        // guessResult = "incorrect"
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
            {/* {playerGuess && <p className="player-guess">{playerName} chose: {playerGuess}</p>}  */}
            {playerGuess && 
                <>
                <p className="player-guess">{playerName} chose: {playerGuess}</p>
                <button id="reveal" onClick={toggleAnswer}>Were you right?</button>
                </>
            }
            {/* {displayGuess && guessResult === "correct" ? <p>You're right!</p> : guessResult === "incorrect" ? <p>Wamp wamp... better luck next time.</p> : null} */}
        </PlayerCardStyled>
    )
}
