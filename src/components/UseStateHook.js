import { useState } from 'react'
import { Button } from "react-bootstrap"

function UseStateHook() {
    let [Num, SetNum] = useState(0)

    let increment = () => {
        SetNum(Num + 1)
    };

    let decrement = () => {
        // if(Num>0){
        // SetNum(Num - 1)
        // }

        // Using ? operator
        Num>0 ? SetNum(Num - 1) : SetNum(Num)
    };

    let reset = () => {
        SetNum(Num=0)
    };
    
    return (
        <div style={{marginTop:"30vh"}}>
            <h1>Number Counter</h1>
            <h2>{Num}</h2>
            <Button onClick={increment} variant="success">Increment</Button>{' '}
            <Button onClick={decrement} variant="danger">Decrement</Button>{' '}
            <Button onClick={reset} variant="warning">Reset</Button>{' '}
        </div>
    )   
}

export default UseStateHook