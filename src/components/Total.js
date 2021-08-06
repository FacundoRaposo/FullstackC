import React from 'react';


const Total = (props) =>{
    const reducer = (acc, cv) => acc+cv;
    let acumulado = props.exercises.reduce(reducer);
    console.log(acumulado);
    return (
        <>
            <p>Number of exercises {acumulado}</p>
        </>
        )
        
}

export default Total;