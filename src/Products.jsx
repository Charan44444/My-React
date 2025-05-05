import { useState } from "react"

function Products(props) {


    const [purchased, setPurchased] = useState(false)
    const [count, setCount] = useState(0)


    // if (props.show == true) {
        function Book(discount){
            console.log(props.name, 'you bought it with',discount, "% discount")
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
            <button onClick={()=>Book(20)}>Buy Now</button> 
            <button onClick={()=>props.delete(props.id)}>Delete</button> 
            
        </div>
        </>
        )
//                 {/* <div>
//                     <img src={props.image} alt="" />
//                     <p>{props.name}</p>
//                     <p>{props.price}</p>
//                 </div>
//             </>
//         )
//     }
//     else {
//         return (
//             <>
//                 <p>not available</p>
//             </> */}
//         {/* )
//     }
 } 
export default Products