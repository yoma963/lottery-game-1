import PlayerPage from './PlayerPage';
import AdminPage from './AdminPage';
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'

const Pages = () => {
  const [key, setKey] = useState('player');
  const [player, setPlayer] = useState({});
  const [newGame, setNewGame] = useState(false);
  const [newRound, setNewRound] = useState(false);
  const [startInd, setStartInd] = useState(false);
  const [winnerNumbers, setWinnerNumbers] = useState([]);

  const [playerTickets, setPlayerTickets] = useState([{
    owner: "Player",
    tips: [1, 2, 3, 4, 5],
    noh: 4,
    prize: 200
  },
  {
    owner: "Player",
    tips: [1, 2, 3, 4, 5],
    noh: 3,
    prize: 100
  },
  {
    owner: "Player",
    tips: [1, 2, 3, 4, 5],
    noh: 1,
    prize: 300
  },
  {
    owner: "Player",
    tips: [1, 2, 3, 4, 5],
    noh: 2,
    prize: 400
  }]);

  useEffect(() => {
    if (newGame) {
      //setAdminBalance(0);
      setNewGame(false);
    }
  }, [newGame])

  return (
    <div className="container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="player" title="Player">
          <PlayerPage player={player} setPlayer={setPlayer}
            newGame={newGame} setNewGame={setNewGame}
            newRound={newRound} setNewRound={setNewRound}
            playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
            winningNumbers={winnerNumbers} setWinnerNumbers={setWinnerNumbers}
          />
        </Tab>
        <Tab eventKey="admin" title="Admin">
          <AdminPage newGame={newGame} setNewGame={setNewGame}
            newRound={newRound} setNewRound={setNewRound}
            player={player} setPlayer={setPlayer}
            playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
            startInd={startInd} setStartInd={setStartInd}
            winnerNumbers={winnerNumbers} setWinnerNumbers={setWinnerNumbers}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Pages;