import { useState } from "react"
import Container from "./components/Container"
import Intro from "./components/Intro";
import Game from "./components/Game"
function App() {
  let [gameState,setGameState]=useState(false);

  return (
    <>
      <Container>
        {gameState ? <Game/> : <Intro setGameState={setGameState}/>}
      </Container>
    </>
  )
}

export default App
