import { useState } from "react";
import "./counter.css"

export default function Counter() {

    const [count, setCount] = useState(0);

    function handleCountPlus(){
        setCount(prevCount => prevCount + 1);
    }

    function handleCountMinus(){
        if(count === 0) {
            alert("Counter can't be less than zero");
            setCount(0);
        } else {
            setCount(prevCount => prevCount - 1);
        }
    }

    function handleCountReset(){
        setCount(0);
    }

    return (
        <div className="counter-container">
            <h1>Counter</h1> 
            <h1 className="count">{count}</h1>
            <button className="counter" onClick={handleCountPlus}>+</button>
            <button className="counter" onClick={handleCountMinus}>-</button>
            <button className="resetBtn" onClick={handleCountReset}>Reset</button>
        </div>      
    )
}