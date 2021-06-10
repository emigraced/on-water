export default function getRandomCoords(){
    let latLon = {
        lat: null,
        lon: null
    }

    function getRandomCoord(min,max){
        return Math.random() * (max - min) + min;
    }
    function truncCoord(coord){

        let numArr = coord.toString().split('.')
        let decimalPlaces = numArr.pop(numArr[1]).split('')
        decimalPlaces.length = 5
        return `${numArr}.${decimalPlaces.join('')}`
    }

    latLon.lat = truncCoord(
        getRandomCoord(-90,90)
    )
    latLon.lon = truncCoord(
        getRandomCoord(-180,180)
    )
    return latLon

}