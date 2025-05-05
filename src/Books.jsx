function Books(props){
    return(
    <>

    { props.image && <div className="card">
        
    {/* <p>{props.id}</p> */}
    <img src={props.image} alt=""/>
    <p>{props.name}</p>
    <p>{props.price}</p>
   
    {/* <button onClick={()=>setCount(count+1)}>{count}</button> */}
    {/* <p>{purchased ? "purchasd" : "got it now"}</p> */}
    <button onClick={()=>BuyNow(20)}>Buy Now</button>
    <button onClick={()=>props.delete(props.id)}>delete</button>
    </div>}
    </>)
    
}
export default Books