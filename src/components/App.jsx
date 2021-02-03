import React from 'react'
import Aleatorio from './Aleatorio'
import Card from './Card'
import '../styles/app.css'

const func = (_) => {
    return (
        <div id="App">
            <h1>Fundamentos React</h1>
            <div id="cards">
                <Card titulo="#01 - Componente Aleatório" color="red">
                    <Aleatorio inferior={1} superior={60}></Aleatorio>  
                </Card>
                <Card titulo="#01 - Componente Aleatório" color="blue">
                    <Aleatorio inferior={1} superior={60}></Aleatorio>  
                </Card>
                <Card titulo="#01 - Componente Aleatório" color="green">
                    <Aleatorio inferior={1} superior={60}></Aleatorio>  
                </Card>
            </div>
        </div>
    )
}

export default func;