import React, {useState} from 'react'

export const PlayerCard = ({id, onWater}) => {

    const [playerGuess, setPlayerGuess] = useState("")
    // const [guessResult, setGuessResult] = useState("")
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

    if ((playerGuess === "Water" && onWater === true) || (playerGuess === "Land" && onWater === false)) {
        console.log(`${[playerName]} guessed right!`)
        // setGuessResult("correct")
    } else if ((playerGuess === "Water" && onWater === false) || (playerGuess === "Land" && onWater === true)) {
        console.log(`Wamp wamp... ${[playerName]} guessed wrong`)
        // setGuessResult("incorrect")
    } 

    return (
        <div>
            <h3>{playerName}</h3>
            <form onSubmit={handleCustomNameSubmit}>
                <input value={input} id="inputField" type="text" placeholder="add a custom name" onChange={handleInputChange}/>
                <input type="submit"/>
            </form>
            <h4>Lock in your guess:</h4>
            {!playerGuess &&
                <>
                <button value="Land" onClick={handleButton}>Land</button>
                <button value="Water" onClick={handleButton}>Water</button>
                </>
            }
            {playerGuess && <p>{playerName} chose: {playerGuess}</p>}
            {/* {guessResult && guessResult === "correct" ? <p>You're right!</p> : guessResult === "incorrect" ? <p>Wamp wamp... better luck next time</p> : null} */}
        </div>
    )
}
