import React, { useState } from 'react'
import useToggle from '../hooks/useToggle'


export default function ToggleComponent() {
    
    const { toggle ,value } = useToggle(false)
    
    return (
        <div>
            <p>toggle current values is : {value ?'ON':'OF'}</p>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}