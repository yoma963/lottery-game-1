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
  const [adminBalance, setAdminBalance] = useState(0);

  const [playerTickets, setPlayerTickets] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTicketList, setAllTicketList] = useState([]);

  useEffect(() => {
    if (newGame) {
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
            adminBalance={adminBalance} setAdminBalance={setAdminBalance}
            allTicketList={allTicketList} setAllTicketList={setAllTicketList}
            totalIncome={totalIncome} setTotalIncome={setTotalIncome}
            startInd={startInd} setStartInd={setStartInd}
            winnerNumbers={winnerNumbers}
          />
        </Tab>
        <Tab eventKey="admin" title="Admin">
          <AdminPage newGame={newGame} setNewGame={setNewGame}
            newRound={newRound} setNewRound={setNewRound}
            player={player} setPlayer={setPlayer}
            playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
            startInd={startInd} setStartInd={setStartInd}
            winnerNumbers={winnerNumbers} setWinnerNumbers={setWinnerNumbers}
            adminBalance={adminBalance} setAdminBalance={setAdminBalance}
            allTicketList={allTicketList} setAllTicketList={setAllTicketList}
            totalIncome={totalIncome} setTotalIncome={setTotalIncome}
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Pages;