import React, {useState,useEffect} from 'react';
import './App.css';

const cellArray = [
  {
    id: 1,
    player: "",
    avai: true
  },
  {
    id: 2,
    player: "",
    avai: true
  },
  {
    id: 3,
    player: "",
    avai: true
  },
  {
    id: 4,
    player: "",
    avai: true
  },
  {
    id: 5,
    player: "",
    avai: true
  },
  {
    id: 6,
    player: "",
    avai: true
  },
  {
    id: 7,
    player: "",
    avai: true
  },
  {
    id: 8,
    player: "",
    avai: true
  },
  {
    id: 9,
    player: "",
    avai: true
  }
]
const App = () => {
  const [cell,setCell] = useState(cellArray);
  const [xTurn,setXTurn] = useState(true);
  const [winner,setWinner] = useState("");
  const [lockGame,setLockGame] = useState(false);

  function playHandle(e) {
    if (!lockGame){
      var check = cell[e-1].avai;
      if (check){
        setCell(
          cell.map((item)=>
            item.id === e
            ? xTurn === true
              ? {...item,player: "X", avai:false} 
              : {...item,player: "O", avai:false}
            : {...item}
          )
        )
        setXTurn(!xTurn);
      }
    }  
  }

  useEffect(checkWinner);

  function checkWinner(){
    if (cell[0].player !== "" &&
        cell[0].player === cell[1].player &&
        cell[0].player === cell[2].player){
      setWinner(cell[0].player)
      setLockGame(true)
    }
    else if (cell[3].player !== "" &&
              cell[3].player === cell[4].player &&
              cell[3].player === cell[5].player){
      setWinner(cell[3].player)
      setLockGame(true)
    }
    else if (cell[6].player !== "" &&
              cell[6].player === cell[7].player &&
              cell[6].player === cell[8].player){
      setWinner(cell[6].player)
      setLockGame(true) 
    }
    else if (cell[0].player !== "" &&
              cell[0].player === cell[3].player &&
              cell[0].player === cell[6].player){
      setWinner(cell[0].player)
      setLockGame(true) 
    }
    else if (cell[1].player !== "" &&
              cell[1].player === cell[4].player &&
              cell[1].player === cell[7].player){
      setWinner(cell[1].player)
      setLockGame(true) 
    }
    else if (cell[2].player !== "" &&
              cell[2].player === cell[5].player &&
              cell[2].player === cell[8].player){
      setWinner(cell[2].player)
      setLockGame(true) 
    }
    else if (cell[0].player !== "" &&
              cell[0].player === cell[4].player &&
              cell[0].player === cell[8].player){
      setWinner(cell[0].player)
      setLockGame(true) 
    }
    else if (cell[2].player !== "" &&
              cell[2].player === cell[4].player &&
              cell[2].player === cell[6].player){
      setWinner(cell[2].player)
      setLockGame(true) 
    }
  }
  const gameReset = () => {
    setCell(cellArray)
    setXTurn(true)
    setLockGame(false)
    setWinner("")
  }

  return(
    <div className='page-body'>
      <table className='game-board'>
        <tbody>
          <tr>
            <td onClick={()=>playHandle(1)}>{cell[0].player}</td>
            <td onClick={()=>playHandle(2)}>{cell[1].player}</td>
            <td onClick={()=>playHandle(3)}>{cell[2].player}</td>
          </tr>
          <tr>
            <td onClick={()=>playHandle(4)}>{cell[3].player}</td>
            <td onClick={()=>playHandle(5)}>{cell[4].player}</td>
            <td onClick={()=>playHandle(6)}>{cell[5].player}</td>
          </tr>
          <tr>
            <td onClick={()=>playHandle(7)}>{cell[6].player}</td>
            <td onClick={()=>playHandle(8)}>{cell[7].player}</td>
            <td onClick={()=>playHandle(9)}>{cell[8].player}</td>
          </tr>
        </tbody>
      </table>
      <button className='game-reset' onClick={gameReset}>Reset</button>
      <h1>Winner </h1>
      <h2>{winner}</h2>
    </div>

  )
}

export default App;
