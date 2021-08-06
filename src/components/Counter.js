
import React,{useState} from 'react';
import Display from './Display';
import Button from './Button';
const Counter = () =>{
    const [counter, setCounter] = useState(0);
    const resetButton = () => setCounter(0);
    const plusOne = () => setCounter(counter+1);
    return(
        <div>
            <Display counter={counter}/>
            <Button handleClick={plusOne} text="Plus"/>
            <Button handleClick={resetButton} text='Reset'/>

        </div>
        )
}

export default Counter;