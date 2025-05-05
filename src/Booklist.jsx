// import Books from "./Books"
// import Ikigai from "./assets/ikigai.jpeg"
// import Bible from "./assets/bible.jpeg"
// import Bhaga from "./assets/bhagavatgita.jpeg"
// import Maha from "./assets/mahabharathaam.jpeg"
import UseFetch from "./UseFetch"
// import { useState,useEffect } from "react"
// function Booklist(){
//     const [ apiData, setapiData] = useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:3000/Books')  
//         .then(response=>response.json())  
//         .then((data)=>
//             (setapiData(data),console.log(data)))
//         // .catch((error)=>{
//         //     console.log(error)
//         // })
//     }
// )
// // let book_list=
    
//     return(

//         <>
//         <h1>hello</h1>
//         {apiData.map((e)=><li key={api.id}>{api.image}{api.price}</li>)}
//         </>
//     )
// }
// export default Booklist
import { useEffect, useState } from "react"

import Books from "./Books"

function Booklist(){
    const [apidata,setApiData]=useState([])
    const [book_product,setimp_books,error]=UseFetch('http://localhost:3000/Books')

    function handledelete(id){
        const new_books=book_product.filter((book)=>book.id!=id)
        setimp_books(new_books)

    }
    if(!book_product){
        return(
        <>
        {!error && <p>Loading</p>}
        {error && <p>{error}</p>}
        </>
        )
    }
    let book_list = book_product.map((p,index)=>
        <Books key={index} image={p.image} name={p.name} price={p.price} id={p.id} delete={handledelete}  ></Books>
    )
    
    // p.sort((x,y)=>x.price-y.price)
//   const  fb=p.filter((e)=>e.price<=1500) 
    // const productitems=pr.map((e, index)=><Products image={e.image} name={e.name} price={e.price} delete={handleDelete} id={e.id}></Products>)
   
    return(
        <>
        <h1>api data</h1>
        {book_list}
        {/* {apidata.map((api)=>{<li key={api.id} > {api.name} {api.image} {api.price} </li>})}
         */}
        {/* <button onClick={()=>setDecrement(Decrement-10)}>Decrement {Decrement}</button> */}
        {/* <button onClick={()=>setIncrement(Increment+10)}>Increment {Increment}</button> */}
        </>
    )
}
    
export default Booklist