import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';
import Counter from './components/Counter';
import { LadosMatriz} from './components/Lados';
import Unicafe from './components/Unicafe';
const App = () =>{
  const course = 'Half Stack application development';
  const parts = ['Fundamentals of React','Using props to pass data','State of a component'];
  const exercises = [10,7,14];
  
  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts} exercise={exercises}/>
      <Total exercises={exercises} />
      <Counter></Counter>
      <LadosMatriz />
      <Unicafe/>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))


