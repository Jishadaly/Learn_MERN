import React, { useState } from 'react'

export default function Parant() {
    const [ childData , setChildData ] = useState(null)
     const handleChildData = (data) =>{
        setChildData(data);
     }
    return (
        <div>
            <h1> data : { childData ? childData : 'no data recived' }</h1>
            <Child sendDatatoParant = { handleChildData }/>
        </div>
    )
}



 function Child(props) {

    const data = 'hello from child'
    const handlPassdata = ()=>{
        props.sendDatatoParant(data);
    }
    return (
        <div>
            <button onClick={handlPassdata}> send data to parant </button>
        </div>
    )
}


