import React from "react";

const Child = ({add,count}) => {

    console.log("Child Render");


    return (
        <div>
        
            <h1>Child Count: {count}</h1>

            <button onClick={add}>
                Increase From Child
            </button>

        </div>
    )
}

export default React.memo(Child);