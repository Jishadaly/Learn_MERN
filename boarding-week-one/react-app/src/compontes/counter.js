import React, { useCallback, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom';


export default function Counter() {
    const [count , setCount ] = useState(0);
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const  name  = searchParams.get('name')
    
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

           <h1>Active User : {name}</h1>
           count : { count } <br/>
          <button onClick={ incrementCall }>increment</button>
          <button onClick={ decrementCall }>decrement</button>
          <p> result(count * 2 ) : {result} </p>
        </div>
    )
}