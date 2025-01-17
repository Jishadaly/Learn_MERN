import { forwardRef, useRef } from "react"

export default function ParentComponent() {

    const ref = useRef();
    const focusChild = ()=>{
        ref.current.focus();
    }

    return (

        <div>
            <CustumeInput ref={ref}/>
            <button onClick={focusChild}> click to focus </button>
        </div>

    )
}

const CustumeInput = forwardRef((prop, ref) => {
   return (
    <div>
         <input type=" text" ref={ref} placeholder="write somthing"/>
    </div>
   )
})