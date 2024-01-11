import { useContext } from "react";
import { DiceStore } from "../store/DiceStore";

const Buttons=()=>{

    let {showRules}=useContext(DiceStore)
    let {reset}=useContext(DiceStore);
    return (
        <>
        <div className="btns">
            <input type="button" value="Reset Score" className="btn reset-btn" onClick={()=>reset()}/>
            <input type="button" value="Show Rules"  className="btn rule-btn" onClick={()=>showRules()}/>
        </div>
        </>
    )
}

export default Buttons;