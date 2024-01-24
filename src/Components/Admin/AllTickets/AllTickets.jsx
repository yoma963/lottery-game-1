import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";

import "./allTickets.css"
import Caret from "../../../Assets/Caret"

const AllTickets = ({ fakeTickets, setFakeTickets,
  playerTickets, setPlayerTickets,
  startInd,
  winnerNumbers, setWinnerNumbers,
  allTicketList, setAllTicketList,
  adminBalance, setAdminBalance,
  setTotalIncome, setWinnerTickets,
  multiplier, setTotalExpenses }) => {

  const [sort, setSort] = useState({ keyToSort: "owner", direction: "desc" });


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

  useEffect(() => {
    if (allTicketList.length > 0) {
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
      setWinnerNumbers(sorted);
    }
  }, [startInd])

  useEffect(() => {
    if (winnerNumbers.length > 0) {
      let winnerTicketsArr = []
      let allIncome = 0;
      let allExpenses = 0;

      let playerArr = playerTickets;
      let fakeArr = fakeTickets;

      if (playerArr.length > 0) {
        playerArr.forEach((item, index) => {
          const hitCounter = countEqualElements(item.tips, winnerNumbers);
          if (hitCounter > 0) {
            playerArr[index].noh = hitCounter;
            playerArr[index].prize = hitCounter * multiplier;
            allExpenses += (hitCounter * multiplier)
            allIncome += (hitCounter * multiplier)
            winnerTicketsArr = winnerTicketsArr.concat(item);
          }
        });
        setPlayerTickets(playerArr);
      }
      if (fakeArr.length > 0) {
        fakeArr.forEach((item, index) => {
          const hitCounter = countEqualElements(item.tips, winnerNumbers);
          if (hitCounter > 0) {
            fakeArr[index].noh = hitCounter;
            fakeArr[index].prize = hitCounter * multiplier;
            allExpenses += (hitCounter * multiplier);
            winnerTicketsArr = winnerTicketsArr.concat(item);
          }
        });
        setFakeTickets(fakeArr);
      }
      setAllTicketList(playerArr.concat(fakeArr));
      setTotalExpenses(allExpenses);
      setTotalIncome(allIncome);
      setAdminBalance(adminBalance - allExpenses);
      setWinnerTickets(winnerTicketsArr);
    }
  }, [winnerNumbers])

  function countEqualElements(array1, array2) {
    if (array1.length !== array2.length) {
      return -1;
    }

    const setFromArray2 = new Set(array2);

    const equalCount = array1.reduce((count, element) => {
      return setFromArray2.has(element) ? count + 1 : count;
    }, 0);

    return equalCount;
  }

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
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
      : null
  );
}

export default AllTickets;