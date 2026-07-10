import {useState} from "react";
import "./App.css";
import type {ReactNode} from "react";

const topics=["DBMS", "OS", "DSA", "OOPS"];
const playerCounts=[4,5,6];

type GameButtonProps={
  children: ReactNode;
  onClick?: ()=>void;
  className?: string;
};

function GameButton({
  children,
  onClick=()=>{},
  className="",
}: GameButtonProps){
  return(
    <button className={`game-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}