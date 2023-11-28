import { Header } from "./Components/Header";
import { Player } from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectedSquare() {
    setActivePlayer((curPlayer) => (curPlayer === "X" ? "O" : "X"));
  }

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player intialPlayerName="Player 1" symbol="X" isActive={activePlayer==='X'} />
            <Player intialPlayerName="Player 2" symbol="O" isActive={activePlayer==='O'}  />
          </ol>
          <GameBoard
            onSelectedSquare={handleSelectedSquare}
            activePlayerSymbol={activePlayer}
          />
        </div>
      </main>
    </>
  );
}

export default App;
