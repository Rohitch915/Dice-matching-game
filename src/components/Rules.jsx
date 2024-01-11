import { useContext } from "react"
import { DiceStore } from "../store/DiceStore"

const Rules=()=>{
    let {setRuleStatus}=useContext(DiceStore);
    let removeRules=()=>{
      setRuleStatus(false)
    }
    return (
        <>
        <ul className="rules-li">
            <input type="button" value="X" className="remove-rule" onClick={()=>removeRules()}/>
            <li>Select Number</li>
            <li>Click On Dice Image</li>
            <li>If You Get Same Number In Dice you have Selected,You will be rewarded the same number of points in the score</li>
            <li>If not your score will be deducted by 2 points</li>
        </ul>
        </>
    )
}

export default Rules