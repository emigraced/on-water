import React, {useState, useEffect} from 'react'
import getRandomCoords from '../utils/getRandomCoords'

export const Coordinates = () => {

    const access_token = "Tf4sirqkzfxKVpj-unYc"

    const [data, setData] = useState("")

    let coords = getRandomCoords()
    const {lat, lon} = coords

    useEffect(() => {
        fetch(`https://api.onwater.io/api/v1/results/${lat},${lon}?access_token=${access_token}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((e) => `My error is: ${e}`)
    }, [])
    
    console.log(data)

    return (
        <>
            <h1>Your coordinates are:</h1>
            {data ? <p>{data.query}</p> : <p>Loading...</p>}
        </>
    );
}
