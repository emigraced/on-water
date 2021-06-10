import React from 'react';

// const URL = "https://api.onwater.io/api/v1/results/50,-50?access_token=9Y3rKaL7PFxJqXm_5YET"
// fetch(URL)
// .then(response => response.jason())
// .then(data => {
//     console.log(data)
//     coords = data.results
//     console.log(coords)
// })
// .catch(error => {console.log(error)})

getLatitude

const PlayerCard2 = () => {
    return(
        <div>
            <label for="lat">Latitude:</label>
            <input type="number" id="lat" name="latitude" min="-90" max="90"/>
            <label for="long">Longitude:</label>
            <input type="number" id="long" name="longitude" min="-180" max="180"/>
        </div>
    )
}

export default PlayerCard2;