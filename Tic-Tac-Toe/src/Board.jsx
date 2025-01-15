//Board.jsx
import './index.css';
import Square from "./square";
import { useState } from 'react';
function Board(){
  const[value,setValue]= useState(Array(9).fill(null));
  const[flag,setFlag]=useState(true);
  function handleUpdate(i){
    if(value[i]|| calculateWinner(value)){ // if vaule[0]!=null or calculatewinner le null return garirako xaina vane
      return;
    }
    const tempVal=value.slice();
    if(flag){
      tempVal[i]="X";
    }
    else{
      tempVal[i]="O"
    }
    setFlag(!flag);
    setValue(tempVal);
  }
  const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (flag ? 'X' : 'O');
  }

  return(
    <>
    <p className='Title'> Tic Tac Toe</p>
    <p className='status'> {status}</p>
    <div className="Board">
<div className="board-row">
  <Square value={value[0]} event={()=>handleUpdate(0)}/>
  <Square value={value[1]} event={()=>handleUpdate(1)}/>
  <Square value={value[2]} event={()=>handleUpdate(2)}/>
</div>
<div className="board-row">
  <Square value={value[3]} event={()=>handleUpdate(3)}/>
  <Square value={value[4]} event={()=>handleUpdate(4)}/>
  <Square value={value[5]} event={()=>handleUpdate(5)}/>
</div>
<div className="board-row">
  <Square value={value[6]} event={()=>handleUpdate(6)}/>
  <Square value={value[7]} event={()=>handleUpdate(7)}/>
  <Square value={value[8]} event={()=>handleUpdate(8)}/>
</div>
</div>
</>
  )
}
function calculateWinner(values){
  const lines=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for(let i=0;i<lines.length;i++){
    const [a,b,c]=lines[i];
    if(values[a]&& values[a]==values[b]&& values[c]==values[a]){
      return values[a];
    }
   
  }
  return null;
  

}

export default Board;