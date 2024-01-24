import React, { useEffect, useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader/AdminHeader";

import './pages.css'
import AdminProfile from "../Components/Admin/AdminProfile/AdminProfile";
import TicketGenerator from "../Components/Admin/TicketGenerator/TicketGenerator";
import AllTickets from "../Components/Admin/AllTickets/AllTickets";
import Winners from "../Components/Admin/Winners/Winners";
import DashboardCard from "../Components/Admin/DashboardCard/DashboardCard";
import MultiDashboardCard from "../Components/Admin/DashboardCard/MultiDashboardCard";

const AdminPage = ({ startInd, setStartInd,
  playerTickets, setPlayerTickets,
  newGame, setNewGame,
  newRound, setNewRound,
  player, setPlayer,
  winnerNumbers, setWinnerNumbers,
  adminBalance, setAdminBalance,
  allTicketList, setAllTicketList,
  totalIncome, setTotalIncome }) => {

  const [fakeTickets, setFakeTickets] = useState([]);
  const [winnerTickets, setWinnerTickets] = useState([]);
  const [payablePrices, setPayablePrices] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const keysForMultiCard = [
    'Prize paid for 1 hit',
    'Prize paid for 2 hit',
    'Prize paid for 3 hit',
    'Prize paid for 4 hit',
    'Prize paid for 5 hit',
  ]

  const multiplier = 80;
  const ticketPrice = 500;

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
      setNewGame(false);
      setAdminBalance(0);
      setPlayer({ ...player, balance: 10000 })
      setWinnerNumbers([]);
      setPlayerTickets([]);
      setFakeTickets([])
      setAllTicketList([])
    }
  }, [newGame])

  useEffect(() => {
    if (newRound) {
      setNewRound(false);
      setWinnerNumbers([]);
      setPlayerTickets([]);
      setFakeTickets([])
      setAllTicketList([])
    }
  }, [newRound])

  useEffect(() => {
    if (winnerTickets.length > 0) {
      const hitCounts = Array(6).fill(0);
    
      winnerTickets.forEach((item) => {
        hitCounts[item.noh] += 1;
      });
    
      const payablePrices = hitCounts.slice(1).map((count, index) => count * (index + 1) * multiplier);
      setPayablePrices(payablePrices);
    }    
  }, [winnerTickets])

  return (
    <>
      <div className="">
        <AdminHeader setNewGame={setNewGame} setNewRound={setNewRound}
          startInd={startInd} setStartInd={setStartInd}
          allTicketList={allTicketList}
        />
        <AdminProfile adminBalance={adminBalance} setAdminBalance={setAdminBalance}
          newGame={newGame} setNewGame={setNewGame}
          newRound={newRound} setNewRound={setNewRound}
        />
        {!startInd
          ? <TicketGenerator fakeTickets={fakeTickets} setFakeTickets={setFakeTickets}
            adminBalance={adminBalance} setAdminBalance={setAdminBalance} ticketPrice={ticketPrice} />
          : <Winners winnerNumbers={winnerNumbers} />}

        {winnerNumbers.length > 0
          ? <div className="dashboard mb-3">
            <div className="row">
              <div className="col-lg">
                <DashboardCard bg='secondary.main' title="Total Tickets" data={allTicketList.length} />
              </div>
              <div className="col-lg">
                <DashboardCard bg='primary.main' title="Winner Tickets" data={winnerTickets.length} />
              </div>
              <div className="col-lg">
                <DashboardCard bg='primary.main' title="Unlucky Tickets" data={allTicketList.length - winnerTickets.length} />
              </div>
              <div className="col-lg">
                <DashboardCard bg='secondary.main' title="Total Income (akcse)" data={allTicketList.length * ticketPrice} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <MultiDashboardCard bg='secondary.main' title="Prizes" keys={keysForMultiCard} values={payablePrices} />
              </div>
              <div className="col-lg-3">
                <DashboardCard bg='error.main' title="Money paid as a prize (akcse)" data={totalExpenses} />
              </div>
              <div className="col-lg-3">
                <DashboardCard bg='primary.main' title="Profit (akcse)" data={(allTicketList.length * ticketPrice) - totalExpenses} />
              </div>
            </div>
          </div>
          : null
        }

        <AllTickets fakeTickets={fakeTickets} setFakeTickets={setFakeTickets}
          playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
          startInd={startInd} setStartInd={setStartInd}
          winnerNumbers={winnerNumbers} setWinnerNumbers={setWinnerNumbers}
          allTicketList={allTicketList} setAllTicketList={setAllTicketList}
          adminBalance={adminBalance} setAdminBalance={setAdminBalance}
          totalIncome={totalIncome} setTotalIncome={setTotalIncome}
          winnerTickets={winnerTickets} setWinnerTickets={setWinnerTickets}
          multiplier={multiplier} totalExpenses={totalExpenses} setTotalExpenses={setTotalExpenses}
        />
      </div>
    </>
  );
};

export default AdminPage;