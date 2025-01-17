import React, { useEffect, useState } from 'react'

export default function StopWatch() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsactive] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive) {
            timer = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000)
        } else {
            clearInterval(timer)
        }
        console.log('RENDERING use effect working');
        return () => {
            clearInterval(timer)
        }

    }, [isActive, seconds]);
    
    return (

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',

        }}>

            <h1>  {seconds}</h1>
            <button onClick={() => setIsactive(!isActive)}> {isActive ? 'Pause' : 'Start'} </button>
            <button onClick={() => setSeconds(0)}> reset </button>
        </div>
    )
}