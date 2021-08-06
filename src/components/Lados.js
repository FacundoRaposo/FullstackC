import React,{useState} from 'react';
const History = (props) =>{
    if (props.allClicks.length ===0) {
        return(
            <div>
                the app is used by pressing buttons
            </div>
        )
    }
    return (
        <div>
            button prss history: { props.allClicks.join(',')}
        </div>
    )
}


const Button = ({handleClick, text}) =>{

    return (
        <div>
            <button onClick={handleClick}>
                {text}
            </button>
        </div>
        
        )
}

const LadosMatriz = () =>{
    const [ right, setRight] = useState(0);
    const [left , setLeft] = useState(0);
    const [allClicks, setAllClicks] = useState([]);
    
    const handleLeftClick =()=> {
        setLeft(left+1);
        setAllClicks(allClicks.concat('L'))
    }

    const handleRightClick =() => {
        setRight(right+1);
        setAllClicks(allClicks.concat('R'))
    }

    return(
    <div>
      {left}
      <Button onClick={handleLeftClick} text='Left'/><Button onClick={handleRightClick} text='Right'/>
      
      {right}
        <History allClicks={allClicks}/>
    </div>
    )
}



export { LadosMatriz};