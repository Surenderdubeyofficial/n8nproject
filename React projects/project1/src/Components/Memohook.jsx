import React, { useMemo, useState } from "react";

const MemoExample = () => {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(5);


    const expensiveCalculation = (num) => {
        console.log("Calculation running...");

        let result = 0;

        for(let i = 0; i < 100000000; i++){
            result += num;
        }

        return result;
    };


    const result = useMemo(() => {
        return expensiveCalculation(number);
    }, [number]);


    return (
        <div>

            <h2>
                Result: {result}
            </h2>

            <h2>
                Count: {count}
            </h2>


            <button 
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Increase Count
            </button>


            <input
                type="number"
                value={number}
                onChange={(e) => {
                    setNumber(Number(e.target.value));
                }}
            />

        </div>
    );
};

export default MemoExample;