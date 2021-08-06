import React from 'react';


const Content = (props) =>{

    return (
        <>
           <p>{props.parts[0]} {props.exercise[0]} </p>
           <p>{props.parts[1]} {props.exercise[1]} </p>
           <p>{props.parts[2]} {props.exercise[2]} </p>
        </>
        )
        
}

export default Content;