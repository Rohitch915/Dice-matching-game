import { useContext, useState } from "react"
import { DiceStore } from "../store/DiceStore"

const NumberBtn = ({ item,blackBack,setBlackBack }) => {
    let {setAlertStatus}=useContext(DiceStore);
    const handleNumBtn = () => {
      if(blackBack==item){
         setBlackBack(-1)
      }else{
        setBlackBack(item);
        setAlertStatus(false);
      }
    }
    return (
        <>
          {
            blackBack==item ? 
                <div className={"num" + `${item}` + " num black-background"} onClick={() => { handleNumBtn() }}>{item}</div>
            :
                <div className={"num" + `${item}` + " num"} onClick={ handleNumBtn}>{item}</div>
            
          }
        </>
    )
}

export default NumberBtn;