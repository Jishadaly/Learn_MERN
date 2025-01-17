import React, { useState } from 'react'

export default function useToggle(initialState) {
    const [ value  , setValue] = useState(initialState)

    const toggle = () =>{
      setValue((prev)=> !prev)
    }
    return {
        value,
        toggle
    }
}
