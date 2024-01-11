import { useContext, useState } from "react";
import NumberBtn from "./NumberBtn"
import { DiceStore } from "../store/DiceStore";

const Numbers = () => {
    let {blackBack,setBlackBack}=useContext(DiceStore);
    let arr=[1,2,3,4,5,6];
    let {alertStatus}=useContext(DiceStore);
    return (
        <>
        
            <div className="numbers-div">
            {alertStatus?<div className="alert">Please Select The Number..</div>:null}
                <div className="numbers">
                   {arr.map((item)=>{
                     return <NumberBtn key={item} item={item} blackBack={blackBack} setBlackBack={setBlackBack}/>
                      
                   })}
                 
                   
                </div>
                <p className="number-text">Select Number</p>
            </div>
        </>
    )
}
export default Numbers;