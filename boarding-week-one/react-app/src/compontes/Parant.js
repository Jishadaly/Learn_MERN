import React, { useState } from 'react'

export default function Parant() {
    
    const [ childData , setChildData ] = useState();
        const handleHere = (data)=>{
            setChildData(data)
        }
    return (
        <div>
            data : { childData ? childData : 'no data recived'}
            <Child sendedData = {handleHere} />
        </div>
    )
}



 function Child(props) {
    const data  = 'message from child'
    const handleSend = ()=>{
        props.sendedData(data);
    }
return(
    <div>
        <button onClick={handleSend}> send data to parent </button>
    </div>
  )
}


