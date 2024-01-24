import React from "react"
import Button from "react-bootstrap/Button";

import "./adminHeader.css"
import 'reactjs-popup/dist/index.css';

const AdminHeader = ({ setNewGame, setNewRound,
  startInd, setStartInd,
  allTicketList }) => {

  const handleNewRound = () => {
    if (startInd) {
      setNewRound(true);
      setStartInd(false);
    }
  }

  const handleNewGame = () => {
    setNewGame(true);
    setStartInd(false);
  }

  const handleStartGame = () => {
    if (!startInd) {
      setStartInd(true);
    }
  }

  return (
    <div className='admin-header mb-3 d-inline-flex'>
      <div>
        <Button variant='success' className={((allTicketList.length > 0) && (!startInd) ? '' : 'disable-button ') + 'start-game-button'}
          onClick={handleStartGame}>Start game</Button>
      </div>
      <div className="admin-header-right d-flex justify-content-end flex-wrap">
        <Button variant='warning' className={(startInd ? '' : 'disable-button ') + 'new-round-button'}
          onClick={handleNewRound}>New round</Button>
        <Button variant='danger' className='new-game-button' onClick={handleNewGame}>New game</Button>
      </div>
    </div >
  );
}

export default AdminHeader