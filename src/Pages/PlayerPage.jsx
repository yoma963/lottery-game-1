import React, { useEffect, useState } from "react";

import PlayerHeader from "../Components/Player/PlayerHeader/PlayerHeader";
import PlayerProfile from "../Components/Player/PlayerProfile/PlayerProfile";
import SingleTicket from "../Components/Player/SingleTicket/SingleTicket";
import LotteryTickets from "../Components/Player/LotteryTickets/LotteryTickets";

import "./pages.css"

const PlayerPage = ({playerTickets, setPlayerTickets, newGame, setNewGame, newRound, setNewRound, player, setPlayer}) => {

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
        <PlayerHeader player={player} setPlayer={setPlayer} />
        {JSON.stringify(player) !== "{}" ?
          <PlayerProfile player={player} setPlayer={setPlayer} /> :
          null}
        {JSON.stringify(player) !== "{}" ?
          <SingleTicket /> :
          null}
        {playerTickets.length > 0 ?
          <LotteryTickets playerTickets={playerTickets} setPlayerTickets={setPlayerTickets} /> :
          null}
      </div>
    </>
  );
};

export default PlayerPage;