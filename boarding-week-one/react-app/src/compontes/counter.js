import React, { useCallback, useMemo, useState } from 'react'

export default function Counter() {
    const [count , setCount ] = useState(0);
    
    const incrementCall = useCallback(()=>{
        setCount(count+ 1)
    },[count]);
    const decrementCall = useCallback(()=>{
        setCount(count - 1)
    },[count])

    const result = useMemo(()=>{
        return count * 2 
    },[count])

    return (
        <div>
          count : { count } <br/>
          <button onClick={ incrementCall }>increment</button>
          <button onClick={ decrementCall }>decrement</button>
          <p> result(count * 2 ) : {result} </p>
        </div>
    )
}