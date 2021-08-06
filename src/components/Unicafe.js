import React,{useState} from 'react';
const Statistics = (props)=>{
    
    let promedio = (props.good-(props.bad))/props.all;
    let buenos = ((props.good/props.all)*100);

    if(props.all === 0){
        return(
            <div>
                <h5>Sin feedback no hay estadisticas</h5>
            </div>
            )
            } 
        return(
            <div>
                <h2>Statistics</h2>
                <table>
                    <tr>
                    <td>Bueno</td><td>{props.good}</td>
                    </tr>
                    <tr>
                    <td>Regular</td><td>{props.regular}</td>
                    </tr>
                    <tr>
                    <td>Malo</td><td>{props.bad}</td>
                    </tr>
                    <tr>
                    <td>Promedio</td><td>{promedio}</td>
                    </tr>
                    <tr>
                    <td>Positivo</td><td>{buenos}</td>
                    </tr>    
                </table>
            </div>
            )
}

const Unicafe = () =>{
 const [good, setGood] = useState(0);
 const [regular, setRegular] = useState(0);
 const [bad, setBad] = useState(0);
 const [all, setAll] = useState(0);
 
const handleClickBad = () => {
    setBad( bad+1)
    setAll(all+1)
}

const handleClickGood = () =>{
    setGood(good+1)
    setAll(all+1)
}

const handleClickRegular = () =>{
    setRegular(regular+1)
    setAll(all+1)
}


return(
    <div>
        <div>
        <h2>Leave your feedback</h2>
        <button onClick={handleClickBad}>BAD</button>

        </div>
        <div>
        <button onClick={handleClickRegular}>REGULAR</button>

        </div>
        <div>
        <button onClick={handleClickGood}>GOOD</button>
      
        </div>
        <div>


            <Statistics good={good} bad={bad} all={all} regular={regular}/>
        </div>

    </div>
)
}

export default Unicafe;