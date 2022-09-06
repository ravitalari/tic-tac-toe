import React from "react"

export const Square = ({value, onClick, index}) => {
    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: '40px',
        fontWeight: '700',
        border: '2px solid white'
    }
    
    return (
        <button style={style} onClick={onClick}>{value}</button>
    )
}