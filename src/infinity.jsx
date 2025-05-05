import {useState} from "react"
function Infinity(){
    const [count , setCount] = useState(2)
    // function Increment(){
    //     count = count+1
    //     console.log(count)
    // }
    return(
        <>
        <button onClick={()=>setCount(count**2)}>{count}</button>
        </>
    )
}
export default Infinity