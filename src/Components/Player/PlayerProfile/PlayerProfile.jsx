import React from "react";
import { Card } from "react-bootstrap";

const PlayerProfile = ({ player, setplayer }) => {
  return (
    <Card className="mb-3 d-flex bg-warning">
      <Card.Body>
        <div className="welcome-message d-flex justify-content-between align-items-center">
          <h1>Hi, {player.name}</h1>
          <p>Balance</p>
        </div>
        <div className="balance d-flex justify-content-end fw-bold">
          <h1 className="money">{player.balance.toLocaleString()} akcse</h1>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlayerProfile