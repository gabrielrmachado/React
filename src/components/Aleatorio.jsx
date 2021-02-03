import React from 'react'

const func = (props) => {
    var aleatorio = props.inferior + (props.superior - props.inferior) * Math.random(); 
    return (
        <div>
            <div>Limite inferior: {props.inferior}</div>
            <div>Limite superior: {props.superior}</div>
            <div>Número aleatório: {parseInt(aleatorio)}</div>
        </div>
    )
}

export default func;