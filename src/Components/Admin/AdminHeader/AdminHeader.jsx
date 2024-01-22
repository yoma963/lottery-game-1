import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";

import "./adminHeader.css"
import 'reactjs-popup/dist/index.css';

const AdminHeader = ({ setNewGame, setNewRound, startInd, setStartInd, winnerNumbers, setWinnerNumbers }) => {

  const handleNewRound = () => {
    setNewRound(true);
    setStartInd(false);
  }

  const handleNewGame = () => {
    setNewGame(true);
    setStartInd(false);
  }

  const handleStartGame = () => {
    setStartInd(true);
    let arr = [];
    while (arr.length < 6) {
      let r = Math.floor(Math.random() * 39) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
      let add = true;

      for (let y = 0; y < 39; y++) {
        if (arr[y] == arr) {
          add = false;
        }
      }
    }
    const sorted = [...arr].sort((a, b) => a - b);
    setWinnerNumbers(sorted)
  }

  return (
    <div className='admin-header mb-3'>
      <div>
        <Button variant='success' className='new-game-button' onClick={handleStartGame}>Start game</Button>
      </div>
      <div className="admin-header-right">
        <Button variant='warning' className='new-round-button' onClick={handleNewRound}>New round</Button>
        <Button variant='danger' className='new-game-button' onClick={handleNewGame}>New game</Button>
      </div>
    </div>
  );
}

export default AdminHeader