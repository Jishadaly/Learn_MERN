import React, { useState ,useMemo} from 'react'

function App() {

  const [count , setCount] = useState(0)
  const memoValue= useMemo (()=>{
    return count * 2

  },[count])

  return (
    <div>
      <h1>memoValue : { memoValue}</h1>
      <p>Count : {count}</p>
      <button onClick={()=> setCount(count+1)}>click me</button>
    </div>
  )
}

export default App