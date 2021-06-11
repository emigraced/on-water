export default function reducer(state, action){

    /* set property of a piece of state.
     This is used to update player properties.*/
    
    // takes an id, the state property we're updating, and the value
    function setProperty(id, property, val){ 

        let playerList = state.playerData.players

        // make a new array from the array in state and iterates through.
        let newList = playerList.map( (x) =>{ // x marks the spot!

            // find the player to update
            if (x.playerId === id){
                x = {   // if player is found, we update their Object
                    ...x,
                    [property]: val
                }
                return x // return the updated player
            }
            return x // or return the player unchanged. 
        })

        return newList // return updated player list
    }

    switch (action.type) {
        // I should have called it setGeoData or something. 
        case 'setCorrectAnswer': {
            return {
                ...state,
                correctAnswer: {
                    coords: action.data.query,
                    lat: action.data.lat,
                    lon: action.data.lon,
                    // a bit of logic converting the true/false boolean to more explicit 'Water' and 'Land'
                    answer: action.data.water ? 'Water' : 'Land',
                    isSet: true // explicitly set this because if we're doing this it's true.
                }
            }
        }
        // handles the adding of player cards!
        case 'setNumOfPlayers': {

            /* a helper function that creates the player states.
             this could have been a new setter... but this works.
             it takes an argument `num` to define how many players it will make */
            function addPlayers(num){
                let playerArray = [] // create empty the player array
                
                // start a for loop each player being added.
                for (let i=0; i<Number(num) ;i++){
                    let element ={      // define an object called element
                      playerId: i + 1,  // player at index 0 has playerId of 1
                      playerName: `player ${i+1}`, // copied Emily's method of naming player
                      playerGuess: false,
                      playerHasGuessed: false,
                      score: 0
                  }
                playerArray.push(element) // push newly created player to array.
                }
              return playerArray // return array from function
            }

            return {
                // dig dwn into playerData object
                ...state,
                playerData: {
                    ...state.playerData,
                    players: addPlayers(action.data), // use function to set players array
                    numOfPlayers: action.data // set number of players.
                }
            }
        }
        case 'setPlayerName': {
            return {
                ...state,
                playerData: {
                    ...state.playerData,
                    // To change the name of 1 player, I update the whole array
                    players: setProperty(action.data.id, 'playerName', action.data.name)
                }
            }
        }
        case 'setPlayerGuess': {
            return {
                ...state,
                playerData: {
                    ...state.playerData,
                    players: setProperty(action.data.id, 'playerGuess', action.data.guess)
                },

            }
        }
        case 'setPlayerAsGuessed': {
            console.log("typeof numOfPlayersGuessed",typeof state.playerData.numOfPlayersGuessed)
            state.playerData.numOfPlayersGuessed++
            return {
                ...state,
                playerData: {
                    ...state.playerData,
                    players: setProperty(action.data.id, 'playerHasGuessed', action.data.bool)
                },
            }
        }
        case 'setPlayerScore': {
            return {
                ...state,
                playerData: {
                    ...state.playerData,
                    players: setProperty(action.data.id, 'playerScore', action.data.score)
                }
            }
        }
        // fallback in case of typo :)
        default:{
            return{
                state
            }}
        }
}