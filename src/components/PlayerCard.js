import React, {useState} from 'react'

export const PlayerCard = ({thisPlayer, setPlayerGuess, setPlayerName}) => {

    const {playerId, playerGuess, playerName, /*playerHasGuessed, score*/} = thisPlayer
    const [input, setInput] = useState("")

    function handleButton(event) {
        setPlayerGuess(playerId, event.target.value)
    }

    function handleInputChange(event) {
        setInput(event.target.value)
    }
        
    function handleCustomNameSubmit(event) {
        event.preventDefault()
        input && setPlayerName(playerId, input)
        setInput("")
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
        </div>
    )
}
