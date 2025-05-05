
import { useState } from "react"

function Hardwares(props){
    const [purchased, setPurchased] = useState(false)
    const [count, setCount] = useState(0)
    function Buy(discount){
        
        console.log(props.name,', you bought it with',discount, "% discount")
        setPurchased(true)
        console.log(purchased)
    } 
    return (
            <>
            <div className = 'card'>
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <p>{props.price}</p>
                <button onClick={()=>setCount(count+1)}></button>
                <p>{purchased ? "purchased" : "get it now"}</p>
                <button onClick={()=>Buy(20)}>Buy Now</button>
                <button onClick={()=>props.delete(props)}>delete</button>

            </div>
            </>
    )
}
export default Hardwares