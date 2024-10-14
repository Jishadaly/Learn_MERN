import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function withAuth(WrappedComponent) {
    return () => {
        const navigate = useNavigate();

        useEffect(() => {
            const condetion = false;
            if (!condetion) {
                alert("You are not authorized to view this page!");
                navigate("/login");
            }
        }, [navigate])

        return <WrappedComponent />
    }
}