import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader/AdminHeader";

import './pages.css'
import AdminProfile from "../Components/Admin/AdminProfile/AdminProfile";
import TicketGenerator from "../Components/Admin/TicketGenerator/TicketGenerator";
import AllTickets from "../Components/Admin/AllTickets/AllTickets";
import Winners from "../Components/Admin/Winners/Winners";

const AdminPage = ({ startInd, setStartInd,
  playerTickets, setPlayerTickets,
  newGame, setNewGame,
  newRound, setNewRound,
  player, setPlayer,
  winnerNumbers, setWinnerNumbers }) => {

  const [adminBalance, setAdminBalance] = useState(0);
  const [fakeTickets, setFakeTickets] = useState([]);

  useEffect(() => {
    const balance = JSON.parse(localStorage.getItem('adminBalance'));
    if (balance) {
      setAdminBalance(balance);
    }
  }, []);

  useEffect(() => {
    if (JSON.stringify(adminBalance) !== null) {
      localStorage.setItem('adminBalance', JSON.stringify(adminBalance));
    }
  }, [adminBalance])

  useEffect(() => {
    if (newGame) {
      setAdminBalance(0);
      setPlayer({ ...player, balance: 10000 })
      setNewGame(false);
      setWinnerNumbers([]);
    }
  }, [newGame])

  useEffect(() => {
    if (newRound) {
      setNewGame(false);
      setWinnerNumbers([]);
    }
  }, [newRound])

  return (
    <>
      <div className="">
        <AdminHeader setNewGame={setNewGame} setNewRound={setNewRound}
          startInd={startInd} setStartInd={setStartInd}
          winnerNumbers={winnerNumbers} setWinnerNumbers={setWinnerNumbers}
        />
        <AdminProfile adminBalance={adminBalance} setAdminBalance={setAdminBalance}
          newGame={newGame} setNewGame={setNewGame}
          newRound={newRound} setNewRound={setNewRound}
        />
        {!startInd
          ? <TicketGenerator fakeTickets={fakeTickets} setFakeTickets={setFakeTickets} />
          : <Winners winnerNumbers={winnerNumbers} />}
        <AllTickets fakeTickets={fakeTickets} setFakeTickets={setFakeTickets}
          playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
          startInd={startInd} setStartInd={setStartInd}
        />
      </div>
    </>
  );
};

export default AdminPage;