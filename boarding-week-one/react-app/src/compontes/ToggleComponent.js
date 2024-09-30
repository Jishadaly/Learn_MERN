import React from 'react'
import useToggle from '../hooks/useToggle'

export default function ToggleComponent() {
    const { value , toggle } = useToggle()
    return (
        <div>
            <p>toggle current values is { value ? 'ON' : 'OF' }</p>
            <button onClick={toggle}>toggle</button>
        </div>
    )
}