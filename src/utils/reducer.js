export default function reducer(state, action){
    //helper functions:
    function findPlayer(idToFind){
        let playerArray = state.playerData.players

        for (let i=0; i<Array.length; i++){
            let x = playerArray[i]
            if (x.playerId === idToFind) {return x}
        }
    }
    function setProperty(id, property, val){
        let player = findPlayer(id)
        
        state.PlayerData.players = [
            ...state.players,
            {...player, [property]: val}
        ]
    }

    switch (action.type) {
        case 'setCorrectAnswer': {
            return {
                ...state,
                correctAnswer: {
                    coords: action.data.query,
                    lat: action.data.lat,
                    lon: action.data.lon,
                    answer: action.data.water ? 'Water' : 'Land'
                }
            }
        }
        case 'addPlayer': {
            return {
                ...state,
                playerData: {
                    ...state.playerData,
                    players: [...state.players, action.data],
                    numOfPlayers: state.players.length
                }
            }
        }
        case 'setPlayerName': {
            return {
                ...state,
                playerData: {
                    ...state.playerData,
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
            // removed helper functions from here
            return {
                ...state,
                playerData: {
                    ...state.playerData,
                    players: setProperty(action.data.id, 'playerHasGuessed', action.data.bool),
                    numOfPlayersGuessed: state.numOfPlayersGuessed + 1
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
        
        default:
            break;
        }
}