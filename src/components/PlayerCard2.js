import React, {useState} from 'react'

const URL = "https://api.onwater.io/api/v1/results/"
const PlayerCard2 = (Coords) => {
const initialCoordsData= {
    lat: "",
    lon: ""
}
const[coordsData, setCoordsData] = useState(initialCoordsData)

function handleFormData(event){
    setCoordsData({
        ...coordsData,
        [event.target.id] : event.target.value
    })
}

function handleSubmit(event){
    event.preventDefault()
    Coords(coordsData.lat)
    Coords(coordsData.lon)
    setCoordsData({
        ...coordsData,
        lat: "",
        lon: ""
    })
}

function getCoordinates(lat, lon){
    fetch(URL + `${coordsData.lat}, ${coordsData.lon}` + '?access_token=9Y3rKaL7PFxJqXm_5YET')
    .then(response => response.jason())
    .then(data => {
        this.setState({
            coords: data,
            loading: false
        })
    })
    .catch(error => {console.log(error)})
}

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label for="lat">Latitude:</label>
                <input type="number" id="lat" name="latitude" value={coordsData.lat} onChange={handleFormData} min="-90" max="90"/>
                <label for="long">Longitude:</label>
                <input type="number" id="lon" name="longitude" value={coordsData.lon} onChange={handleFormData} min="-180" max="180"/>
                <button value="Land" onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default PlayerCard2;