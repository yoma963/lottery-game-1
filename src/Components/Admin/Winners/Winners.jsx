import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import "./winners.css"

const Winners = ({ winnerNumbers }) => {

  return (
    <>
      <Card className="mb-3 d-flex bg-warning text-center">
        <Card.Body>
          <div className="winner-title">
            <h1>Winner Numbers!</h1>
          </div>
          <div className="winner-numbers">
            {winnerNumbers.map((item, index) =>
              <h2 key={index} className="winner-circle mx-2">{item}</h2>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Winners;