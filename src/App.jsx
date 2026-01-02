import React from "react"
import Die from "./compoments/die"
import {nanoid} from "nanoid";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";




export default function App(){

  
const { width, height } = useWindowSize();
const [newdice ,setnewDice]=React.useState(generateAllNewDice());
const game=newdice.every(die=> die.isheld)&&newdice.every(die=>die.value===newdice[0].value);

  

  function hold(id){
   setnewDice(prev=>{
    return prev.map((obj)=>{
      return obj.id===id?{
        ...obj,isheld:!obj.isheld
      }:obj
    })
   })
  }

  function generateAllNewDice(){
    const arr=[];
    for(let i=0;i<10;i++){
      const no=Math.floor(Math.random()*6) + 1;
      arr.push({value:no,isheld:false,id:nanoid()});
    }
    return arr
    // return new Array(10)
    //         .fill(0)
    //         .map(() => Math.ceil(Math.random() * 6))

  }

  function handleRoll(){
    setnewDice((prev=>
      prev.map((obj=>
        obj.isheld===false?{...obj,value:Math.floor(Math.random()*6) + 1}:obj
      ))
    ));
  }

  return(
    <>
      <main>
        
        {game && <Confetti width={width} height={height} />}

        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice">
        {newdice.map((obj)=>{
          return <Die  
          value={obj.value} 
          isheld={obj.isheld} 
          key={obj.id}
          hold={()=>hold(obj.id)} />
          
        })}
        </div>
        <button className="roll-dice" onClick={handleRoll}>{game?"New Game":"Roll Dice"}</button>
         
       
      </main>
      
    
    </>
  )
}