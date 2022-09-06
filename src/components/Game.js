import React from "react"
import {Board} from "./Board"
import { calculateWinner } from "../helper"

export const Game = () => {
    const [board, setBoard] = React.useState(Array(9).fill(null))
    const [player, setPlayer] = React.useState(true)
    const winner = calculateWinner(board)

    function handleClick(i) {
        const boardCopy = [...board]
        if (winner || boardCopy[i]) {
            return
        }

        boardCopy[i] = player ? 'X' : 'O'
        setBoard(boardCopy)
        setPlayer(!player)
    }

    return (
        <>
            <Board squares={board}  onClick={handleClick}/>
            <p>{winner ? 'winner is:' + winner : 'NextPlayer:' + (player? 'X' : 'O')} </p>
        </>
    )
}