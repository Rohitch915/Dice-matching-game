import Numbers from "./Numbers"
import Score from "./Score"
import Dice from "./Dice"
import Buttons from "./Buttons"
import { DiceStore } from "../store/DiceStore"
import { useState } from "react"
import Rules from "./Rules"
const Game = () => {
    let [blackBack,setBlackBack]=useState(-1);
    let [alertStatus,setAlertStatus]=useState(false);
    let [score,setScore]=useState(0);
    let [ruleStatus,setRuleStatus]=useState(false);
    let showRules=()=>{
        setRuleStatus(true)
    }
    let reset=()=>{
        setBlackBack(-1)
        setScore(0)
    }
    return (
        <>
            <DiceStore.Provider value={{blackBack, setBlackBack,alertStatus,setAlertStatus,score,setScore,reset,ruleStatus,setRuleStatus,showRules}}>
                <div className="first">
                    <Score />
                    <Numbers />
                </div>
                {ruleStatus? 
                <div className="rules startAnime">
                   <Rules></Rules>
                </div> : null}
                <Dice />
                <Buttons></Buttons>
            </DiceStore.Provider>
        </>
    )
}

export default Game