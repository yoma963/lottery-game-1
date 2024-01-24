import { React, useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

import './lotteryTickets.css'
import Caret from "../../../Assets/Caret";

const LotteryTickets = ({ playerTickets,
  totalIncome, setTotalIncome,
  startInd }) => {

  const [sort, setSort] = useState({ keyToSort: "time", direction: "asc" });
  const total = []

  const headers = [
    {
      id: 1,
      key: "time",
      label: "Time"
    },
    {
      id: 2,
      key: "owner",
      label: "Owner"
    },
    {
      id: 3,
      key: "tips",
      label: "Tips"
    },
    {
      id: 4,
      key: "noh",
      label: "Number of Hits"
    },
    {
      id: 5,
      key: "prize",
      label: "Prize (akcse)"
    }
  ]

  useEffect(() => {
    let total = 0;
    playerTickets.forEach((item, index) => {
      total += item.prize;
    });
    setTotalIncome(total);
  }, [playerTickets])

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
    playerTickets.length > 0
      ? <Card className="mb-3 d-flex bg-warning table-card">
        <Card.Body>
          <div className="tableFixHead">
            <Table striped variant="light">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} onClick={() => (header.key === "noh") && startInd ? handleHeaderClick(header) : null}>
                      <div className="header-container">
                        <span>{header.label}</span>
                        {(header.key === "noh") && startInd && (
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
                      header.key === "tips"
                        ? <td title={row[header.key]} key={index}>
                          {row[header.key].join(", ")}
                        </td>
                        : <td title={row[header.key]} key={index}>
                          {row[header.key]}
                        </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td>Total income:</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{totalIncome}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
      : null
  );
}

export default LotteryTickets;