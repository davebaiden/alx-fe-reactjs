import { useState } from "react";

function Counter(){
    const[count, setCount] = useState(0);

    return(
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
        </div>
    );
}
export default Counter;