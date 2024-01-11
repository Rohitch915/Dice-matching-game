import { createContext } from "react";

export const DiceStore=createContext(
    {
        blackBack :-1,
        setBlackBack:()=>{},
        alertStatus:false,
        setAlertStatus:()=>{},
        score:0,
        setScore:()=>{},
        reset:()=>{},
        setRuleStatus:()=>{},
        ruleStatus:false,
        showRules:()=>{},
    }
)
