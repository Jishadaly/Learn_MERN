import React, { useEffect, useState } from 'react'

export default function MouseTracker({ children }) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMove = e => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('mousemove', handleMove);
        return () => {
            window.removeEventListener('mousemove', handleMove);
        }
    }, [])
    return mousePosition.x === mousePosition.y ? children(mousePosition) : <p>Mouse is not at the same position</p>;
}
