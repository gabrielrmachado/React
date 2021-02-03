import React from 'react'
import '../styles/card.css'

const func = (props) => {

    const estilo = {
        backgroundColor: props.color
    }

    return (
        <div className="card">
            <div className="titulo"  style={estilo}><h2>{props.titulo}</h2></div>
            <div className="conteudo">{props.children}</div>
        </div>
    )
}

export default func;