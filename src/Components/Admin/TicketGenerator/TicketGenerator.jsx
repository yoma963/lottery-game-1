import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

import "./ticketGenerator.css"
import { toast } from "react-toastify";

const TicketGenerator = ({ fakeTickets, setFakeTickets,
  adminBalance, setAdminBalance, ticketPrice }) => {

  const generateTickets = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target),
      formDataObj = Object.fromEntries(formData.entries());
    const numberOfTickets = Number(formDataObj.numberOfTickets);
    if ((fakeTickets.length + numberOfTickets) < 101) {
      
      for (let i = 0; i < numberOfTickets; i++) {
        let arr = [];
        while (arr.length < 5) {
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
        setFakeTickets(fakeTickets => [...fakeTickets, {
          owner: "Bot",
          tips: sorted,
          noh: 0,
          prize: 0
        }]);
      }
      setAdminBalance(adminBalance => adminBalance + (numberOfTickets * ticketPrice))
    }
    else {
      toast.error('Too much lottery ticket (max. 100)', {
        position: 'top-center',
        autoClose: 4000
      });
    }
  }

  return (
    <Card className="mb-3 d-flex bg-light">
      <Card.Body>
        <h2>You can generate new tickets here</h2>
        <Form onSubmit={generateTickets}>
          <Form.Group className="mb-2">
            <Form.Label>How many tickets do you need?</Form.Label>
            <div className="d-flex ">
              <Form.Control required name="numberOfTickets" type="number" placeholder="1 - 100" className="number-of-tips" min={1} max={100} />
              <Button variant="warning" type="submit" className="justify-content-center">
                Generate
              </Button>
            </div>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default TicketGenerator;