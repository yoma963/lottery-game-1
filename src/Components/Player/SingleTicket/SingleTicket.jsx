import React from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import './singleTicket.css'

const SingleTicket = () => {

  const newTicket = (event) => {
    
  };

  return (
    <Card className="mb-3 d-flex bg-secondary">
      <Card.Body>
        <div className="welcome-message text-light">
          <h2>Fill out your lottery ticket</h2>
        </div>
        <Form onSubmit={newTicket}>
          <Form.Group className="mb-2">
            <div className="tip-numbers d-flex justify-content-between mx-3">
              <div className="text-center">
                <Form.Label className="circle my-2">1</Form.Label>
                <Form.Control required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-2">2</Form.Label>
                <Form.Control required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-2">3</Form.Label>
                <Form.Control required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-2">4</Form.Label>
                <Form.Control required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-2">5</Form.Label>
                <Form.Control required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
            </div>
            <div className="text-center mt-4">
              <Button variant="warning" type="submit" className="justify-content-center my-1">
                Add tip
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SingleTicket;