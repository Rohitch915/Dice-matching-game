import { useContext, useState } from "react"
import { DiceStore } from "../store/DiceStore"
const Dice=()=>{
    let [src,setSrc]=useState("../public/images/dice/dice_1.png")
    let {blackBack,setAlertStatus,setScore,score}=useContext(DiceStore)
    
    const handleDice=()=>{
     if(blackBack>0){
        let randInt=Math.floor(Math.random()*6)+1;
        setSrc("../public/images/dice/dice_"+randInt+".png");
        calcScore(randInt);
    }else{
        setAlertStatus(true)
    }
        
    }
    let calcScore=(randInt)=>{
        if(randInt==blackBack){
            setScore(score+randInt)
        }else{
            setScore(score-2)
        }
    }

    return (
        <>
        <div className="dice-div">
            <img src={src} alt="dice" onClick={handleDice} className="dice"/>
            <p>Click on Dice to Roll</p>
        </div>
        
        </>
    )
}

export default Dice;