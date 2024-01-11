import { useContext } from "react"
import { DiceStore } from "../store/DiceStore"

const Score=()=>{
    let {score}=useContext(DiceStore);
    return (
        <>
        <div className="score-div">
             <p className="score">{score}</p>
             <p className="score-text">Total Score</p>
        </div>
        </>
    )
}

export default Score