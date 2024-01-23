import React, { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";

import "./adminHeader.css"
import 'reactjs-popup/dist/index.css';

const AdminHeader = ({ setNewGame, setNewRound,
  startInd, setStartInd,
  winnerNumbers, setWinnerNumbers,
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
    <div className='admin-header mb-3'>
      <div>
        <Button variant='success' className={(allTicketList.length > 0 ? '' : 'disable-button ') + 'new-game-button'}
          onClick={handleStartGame}>Start game</Button>
      </div>
      <div className="admin-header-right">
        <Button variant='warning' className={(startInd ? '' : 'disable-button ') + 'new-round-button'}
          onClick={handleNewRound}>New round</Button>
        <Button variant='danger' className='new-game-button' onClick={handleNewGame}>New game</Button>
      </div>
    </div >
  );
}

export default AdminHeader