import React from "react"
import { Square } from "./Square"

export const Board = ({squares, onClick}) => {
    const style = {
        width: '250px',
        height: '250px',
        border: '4px solid white',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr)/repeat(3, 1fr)',
    }

    return (
        <div style={style}>
            {squares.map((square, i) => (
            <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}