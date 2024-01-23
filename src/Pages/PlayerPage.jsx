import React, { useEffect, useState } from "react";

import PlayerHeader from "../Components/Player/PlayerHeader/PlayerHeader";
import PlayerProfile from "../Components/Player/PlayerProfile/PlayerProfile";
import SingleTicket from "../Components/Player/SingleTicket/SingleTicket";
import LotteryTickets from "../Components/Player/LotteryTickets/LotteryTickets";

import "./pages.css"
import Winners from "../Components/Admin/Winners/Winners";

const PlayerPage = ({ playerTickets, setPlayerTickets,
  newGame, setNewGame,
  newRound, setNewRound,
  player, setPlayer,
  adminBalance, setAdminBalance,
  totalIncome, setTotalIncome,
  startInd, setStartInd, 
  winnerNumbers }) => {

  useEffect(() => {
    const player = JSON.parse(localStorage.getItem('player'));
    if (player) {
      setPlayer(player);
    }
  }, []);

  useEffect(() => {
    if (JSON.stringify(player) !== "{}") {
      localStorage.setItem('player', JSON.stringify(player));
    }
  }, [player])

  return (
    <>
      <div className="">
        <PlayerHeader player={player} setPlayer={setPlayer}
        newGame={newGame} setNewGame={setNewGame} 
        startInd={startInd} setStartInd={setStartInd}/>
        {JSON.stringify(player) !== "{}"
          ? <PlayerProfile player={player} setPlayer={setPlayer} />
          : null}
        {(JSON.stringify(player) !== "{}") && !startInd
          ? <SingleTicket player={player} setPlayer={setPlayer}
            adminBalance={adminBalance} setAdminBalance={setAdminBalance}
            playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
          />
          : <Winners winnerNumbers={winnerNumbers} />}
        {playerTickets.length > 0
          ? <LotteryTickets playerTickets={playerTickets} setPlayerTickets={setPlayerTickets}
            totalIncome={totalIncome} setTotalIncome={setTotalIncome} />
          : null}
      </div>
    </>
  );
};

export default PlayerPage;