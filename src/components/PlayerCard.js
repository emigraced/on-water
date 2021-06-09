import React, {useState} from 'react'

export const PlayerCard = ({name}) => {

    const [selection, setSelection] = useState("")

    function handleButton(event) {
        setSelection(event.target.value)
    }

    return (
        <div>
            <h3>Player: {name}</h3>
            <p>Lock in your guess:</p>
            {!selection &&
                <>
                <button value="Land" onClick={handleButton}>Land</button>
                <button value="Water" onClick={handleButton}>Water</button>
                </>
            }
            {selection && <p>You chose: {selection}</p>}
        </div>
    )
}
