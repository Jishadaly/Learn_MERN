import { forwardRef, useRef } from "react"

 export default function ParentComponent (){

    const ref = useRef();
    const handleFocus = ()=>{
         ref.current.focus();
    }

    return(
        <div>
            <CustumeInput ref={ref} />
            <button  onClick={handleFocus}>Focus input from parent </button>
         </div>
    )
}

const CustumeInput = forwardRef ( ( prop , ref)=> {

    return(
        <div>
            <label>Enter Name : </label>
            <input ref={ref} type="text" placeholder="type here" />
        </div>
    )
});