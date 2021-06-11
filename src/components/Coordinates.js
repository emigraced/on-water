import React, {useState, useEffect} from 'react'
import getRandomCoords from '../utils/getRandomCoords'
import {StyledCoordinates} from '../components/styled/Styled'
import { SelectPlayers } from './SelectPlayers'

export const Coordinates = () => {

    const access_token = "Tf4sirqkzfxKVpj-unYc"

    let coords = getRandomCoords()
    const {lat, lon} = coords

    const initialData = {
        lat: lat,
        lon: lon
    }

    const [data, setData] = useState(initialData)
    const [formDisplay, setFormDisplay] = useState(false)
    
    useEffect(() => {
        fetch(`https://api.onwater.io/api/v1/results/${data.lat},${data.lon}?access_token=${access_token}`)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((e) => `My error is: ${e}`)
    }, [])
    
    function handleFormData(event){
        setData({
            ...data,
            [event.target.id] : event.target.value
        })
    }

    function toggleFormDisplay() {
        setFormDisplay(formDisplay ? false : true)
        let btn = document.getElementById('toggle')
        if (btn.textContent === "Show") {
            btn.textContent = "Hide"
        } else if (btn.textContent === "Hide") {
            btn.textContent = "Show"
        }
    }

    return (
        <StyledCoordinates>
            <h1>Your random coordinates are:</h1>
            {data ? <h2 className="random-coords">{`Latitude: ${data.lat}, Longitude: ${data.lon}`}</h2> : <h3>Loading...</h3>}
            <p>Want to test your friends? Click 'show' to enter your own coordinates.</p>
            <button id="toggle" onClick={toggleFormDisplay} className="show-button">Show</button>
            {formDisplay && 
                <form>
                    <label htmlFor="lat" className="coords-label">Lat:</label>
                    {/* min="-90" max="90" */}
                    <input type="number" id="lat" name="latitude" value={data.lat} onChange={handleFormData} className="input-field"/>
                    <label htmlFor="long" className="coords-label">Lon:</label>
                    {/* min="-180" max="180" */}
                    <input type="number" id="lon" name="longitude" value={data.lon} onChange={handleFormData} className="input-field"/>
                </form>
              }
              <SelectPlayers onWater={data.water}/>
       
        </StyledCoordinates>
           
    );
}
