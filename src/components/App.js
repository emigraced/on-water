import React from 'react'
import { PlayerCard } from './PlayerCard'
// import PlayerCard2 from './PlayerCard2'
import {SelectPlayers} from './SelectPlayers'

const App = () => {
  return (
    <div >
          The basic empty template
          {/* <PlayerCard2 /> */}
          <SelectPlayers />
          <PlayerCard name="Emily"/>
          <PlayerCard name="Derick"/>
          <PlayerCard name="Ihab"/>
    </div>
  )
}

export default App
