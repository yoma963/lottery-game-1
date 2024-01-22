import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

import "./winners.css"

const Winners = ({ winnerNumbers }) => {

  useEffect(() => {
    console.log(winnerNumbers)
  }, [winnerNumbers])

  return (
    <>
      <Card className="mb-3 d-flex bg-warning text-center">
        <Card.Body>
          <div className="winner-title">
            <h1>Winner Numbers!</h1>
          </div>
          <div className="winner-numbers">
            {winnerNumbers.map((item) =>
              <h2 className="winner-circle mx-2">{item}</h2>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Winners;