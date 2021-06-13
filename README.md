# GeoGuesser

## Creators

GeoGuesser was created in 2021 by Derick Smith, Emily Mills, and Ihab Bou Hassan as part of a class hackathon at [Coder Academy](https://coderacademy.edu.au/).

## Summary

The player(s) is presented with a set of random coordinates, and asked to guess whether those coordinates are on land or on water. 

## Functionality 

Every page refresh generates new random coordinates (though a player can customise the coordinates if they want to test their friends). 

The user is first asked to select the number of players (1-6 available), which will trigger the correct number of player cards to appear on the screen. (If played in multiplayer mode, GeoGuessers assumes the players are gathered around the same computer.)

Each player can use their card to set their name (which defaults to 'Player n') and lock in their guess.

## Third Party Tools

To build this game we utilised the [onwater.io](https://onwater.io/) API which, when sent a set of coordinates, returns whether they are on water or land. 