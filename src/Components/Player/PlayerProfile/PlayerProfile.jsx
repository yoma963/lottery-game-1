import React from "react";
import { Card } from "react-bootstrap";

const PlayerProfile = ({ player, setplayer }) => {
  return (
    <Card className="mb-3 d-flex bg-warning">
      <Card.Body>
        <div className="welcome-message">
          <h1>Hi, {player.name}</h1>
        </div>
        <div className="balance d-flex mt-3 justify-content-between fw-bold">
          <p>Balance</p>
          <p className="money">{player.balance.toLocaleString()} akcse</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlayerProfile