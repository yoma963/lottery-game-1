import React from "react";
import { Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import './singleTicket.css'
import { toast } from "react-toastify";

const SingleTicket = ({ player, setPlayer,
  adminBalance, setAdminBalance,
  playerTickets, setPlayerTickets }) => {

  const ticketPrice = 500;

  const newTicket = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    const numbers = [
      Number(formDataObj.numOne),
      Number(formDataObj.numTwo),
      Number(formDataObj.numThree),
      Number(formDataObj.numFour),
      Number(formDataObj.numFive)
    ]
    if (numbers.every(isUnique)) {
      if (player.balance >= ticketPrice) {
        setPlayer({ ...player, balance: (player.balance - ticketPrice) });
        setAdminBalance(adminBalance + ticketPrice);

        const sorted = [...numbers].sort((a, b) => a - b);
        setPlayerTickets(playerTickets => [...playerTickets, {
          owner: "Player", 
          tips: sorted,
          noh: 0,
          prize: 0
        }]);
        toast.success(`Ticket created, with these numbers: ${numbers.join(", ")}`, {
          position: 'top-center',
          autoClose: 4000
        });
      }
      else {
        toast.error("You don't have enough money for a new ticket", {
          position: 'top-center',
          autoClose: 4000
        });
      }
    }
    else {
      toast.error('Ticket is not valid! 5 different numbers must be entered!', {
        position: 'top-center',
        autoClose: 4000
      });
    }

  };

  function isUnique(value, index, array) {
    return array.indexOf(value) === array.lastIndexOf(value);
  }

  return (
    <Card className="mb-3 d-flex bg-secondary">
      <Card.Body>
        <div className="welcome-message text-light">
          <h2>Fill out your lottery ticket</h2>
        </div>
        <Form onSubmit={newTicket}>
          <Form.Group className="mb-2">
            <div className="tip-numbers d-flex justify-content-between mx-3">
              <div className="text-center my-1">
                <Form.Label className="circle my-3">1</Form.Label>
                <Form.Control name="numOne" required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-3">2</Form.Label>
                <Form.Control name="numTwo" required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-3">3</Form.Label>
                <Form.Control name="numThree" required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-3">4</Form.Label>
                <Form.Control name="numFour" required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
              <div className="text-center">
                <Form.Label className="circle my-3">5</Form.Label>
                <Form.Control name="numFive" required type="number" placeholder="1 - 39" className="tip" min={1} max={39} />
              </div>
            </div>
            <div className="text-center mt-3">
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