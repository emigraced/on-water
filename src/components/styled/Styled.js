import styled from "styled-components";

// Coordinates component styling
export const StyledCoordinates = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-self: center;
    background-color: #78ABEA;
    margin: 0px;
    box-sizing: border-box;

    .show-button{
        width: 10vw;
        height: 4vh;
        align-self: flex-end;
        background-color: #EAB678;
        margin-right: 8.5vw;
        font-size: 2vh;
        font-weight: bold;
        margin-bottom: 1vh;
        border: 2px solid #000000;
    }

    .input-field{
        width: 20vw;
        height: 3vh;
        background-color: #EAB678;
        margin-right:5vw;
        flex-direction: row;
        font-size: 3vh;
        align-self: flex-end;
        margin-bottom: 1vh;
        border: 1px solid #000000;
    }

    .coords-label{
        font-size: 3.5vh;
        font-weight: bold;
    }

    .random-coords{
        background-color: #EAB678;
        padding: 5px;
        border: 2px solid #000000;
    }
`

// Select player component styling
export const SelectPlayersStyled = styled.div`
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-self: center;
    background-color: #78ABEA;
    margin-top: 20px;
    margin-left: 0px;
    margin-right: 0px;
    box-sizing: border-box;

    .players-selection{
        background-color: #EAB678;
        margin-bottom: 1vh;
        border: 2px solid #000000;
    }
`

// PlayerCard component styling
export const PlayerCardStyled = styled.span`
    border: 2px solid #000000;
    flex-direction: column;
    flex-wrap: wrap;
    width: 25vw;
    margin-top: 5vh;
    margin-right: 3vw;
    margin-left: 3vw;
    padding: 10px;
    background-color: #EAB678;
    display: inline-flex;
   

    .play-button{
        width: 8vw;
        height: 4vh;
        align-self: flex-start;
        background-color: #78ABEA;
        font-size: 2vh;
        font-weight: bold;
        margin-top: 1px;
        border: 2px solid #000000;
        display: flex;
        flex-flow: row nowrap;
    }

    .input-field{
        width: 20vw;
        height: 3vh;
        background-color: #78ABEA;
        margin-right:5vw;
        flex-direction: row;
        font-size: 3vh;
        align-self: flex-end;
        margin-bottom: 1px;
        border: 1px solid #000000;
    }

    .player-name{
        font-size: 4vh;
        padding: 2px;
        margin-bottom: 2px;
        border: 1px solid #000000;
        background-color: #78ABEA;
        width: 50%;
        text-align: center;
    }

    .player-guess{
        font-size: 5vh;
        padding: 2px;
        margin-bottom: 2px;
        border: 1px solid #000000;
        background-color: #78ABEA;
        width: 90%;
        text-align: center;
    }
`