import React, { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import Form from "react-bootstrap/Form";
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";

import "./playerHeader.css"
import 'reactjs-popup/dist/index.css';

import LottoBall from "../../../Assets/LottoBall";

const PlayerHeader = ({ setPlayer,
  setNewGame, setStartInd }) => {

  const newPlayer = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    const playerName = formDataObj.playerName;
    setPlayer({
      name: playerName,
      balance: 10000
    });
    setNewGame(true);
    setStartInd(false);
  }

  return (
    <div className='header mb-3'>
      <div className="logo d-inline-flex align-items-center">
        <LottoBall />
        <h2>Lottery game</h2>
      </div>
      <div>
        <Popup
          trigger={<Button variant='danger' className='new-game-button'>New player</Button>}
          modal
          contentStyle={{ minWidth: "300px" }}
        >
          {close => (
            <div className="d-block p-1">
              <div className="d-inline-flex w-100 justify-content-between my-2">
                <h2>Choose a player name!</h2>
                <div>
                  <Button variant="warning" className="close-icon" onClick={close}>
                    <FontAwesomeIcon icon={faXmark} />
                  </Button>
                </div>
              </div>

              <div className="modal-content py-0">
                <Form onSubmit={newPlayer}>
                  <Form.Group className="mb-3">
                    <Form.Control required name="playerName" className="my-2" type="text" placeholder="Enter your name here..." />
                    <div className="text-center">
                      <Button variant="primary" type="submit" className="justify-content-center mt-2">
                        Let's go
                      </Button>
                    </div>
                  </Form.Group>
                </Form>
              </div>
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
}

export default PlayerHeader