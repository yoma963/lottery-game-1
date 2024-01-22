import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

import "./allTickets.css"
import Caret from "../../../Assets/Caret"

const AllTickets = ({ fakeTickets, setFakeTickets,
  playerTickets, setPlayerTickets,
  startInd, setStartInd }) => {

  const [sort, setSort] = useState({ keyToSort: "owner", direction: "desc" });
  const [allTicketList, setAllTicketList] = useState([]);

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

  useEffect(() => {
    setAllTicketList(fakeTickets.concat(playerTickets))
  }, [fakeTickets, playerTickets])

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
    allTicketList.length > 0
      ? <Card className="mb-3 d-flex bg-warning">
        <Card.Body>
          <div className="tableFixHead-admin">
            <Table striped variant="light">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} onClick={() => startInd ? handleHeaderClick(header) : null}>
                      <div className="header-container-admin">
                        <span>{header.label}</span>
                        {(header.key === sort.keyToSort) && startInd && (
                          <Caret
                            direction={sort.keyToSort === header.key ? sort.direction : "asc"} />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {getSortedArray(allTicketList).map((row, index) => (
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
                  <td>0 akcse</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
      : null
  );
}

export default AllTickets;