import React from "react";
import { Card } from "react-bootstrap";

const AdminProfile = ({ adminBalance, setAdminBalance }) => {

  return (
    <Card className="mb-3 d-flex bg-warning">
      <Card.Body>
        <div className="welcome-message">
          <h1>Hi, Admin</h1>
        </div>
        <div className="balance d-flex mt-3 justify-content-between fw-bold">
          <p>Balance</p>
          <p className="money">{adminBalance.toLocaleString()} akcse</p>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AdminProfile