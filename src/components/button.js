import React from 'react'

const button = ({ func, label }) => {
    return (
        <button onClick = { () => func()}> {label} </button>
    )
}

export default button
