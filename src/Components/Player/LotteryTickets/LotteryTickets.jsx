import { React, useState } from "react";
import { Card, Table } from "react-bootstrap";

import './lotteryTickets.css'
import Caret from "../../../Assets/Caret";

const LotteryTickets = ({ playerTickets, setPlayerTickets }) => {

  const [sort, setSort] = useState({ keyToSort: "nr", direction: "asc" });

  const headers = [
    {
      id: 1,
      key: "owner",
      label: "Owner"
    },
    {
      id: 2,
      key: "tips",
      label: "Tips"
    },
    {
      id: 3,
      key: "noh",
      label: "Number of Hits"
    },
    {
      id: 4,
      key: "prize",
      label: "Prize"
    }
  ]

  const handleHeaderClick = (header) => {
    setSort({
      keyToSort: header.key,
      direction:
        header.key === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc"
    });
  };

  const getSortedArray = (arrayToSort) => {
    if (sort.direction === "asc") {
      return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1));
    }
    return arrayToSort.sort((a, b) => (a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1));
  };

  return (
    <Card className="mb-3 d-flex bg-warning table-card">
      <Card.Body>
        <div className="tableFixHead">
          <Table striped variant="light">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index} onClick={() => header.key === "noh" ? handleHeaderClick(header) : null}>
                    <div className="header-container">
                      <span>{header.label}</span>
                      {header.key === "noh" && (
                        <Caret
                          direction={sort.keyToSort === header.key ? sort.direction : "asc"} />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getSortedArray(playerTickets).map((row, index) => (
                <tr key={index}>
                  {headers.map((header, index) => (
                    <td title={row[header.key]} key={index}>
                      {row[header.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td>Total income:</td>
                <td>0 akcse</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>

  );
}

export default LotteryTickets;