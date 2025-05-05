import { useEffect } from "react";
import { useState } from "react";


function FetchApi() {
    const [apiData, setApiData] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
        return response.json()})
        .then((data)=>setApiData(data))
    },[])
    console.log(apiData)
return(
        <>
        <h1>Api Data</h1>
        <ul>
            {apiData.map((api)=><li key={api.id}>{api.title} {api.userid}</li>)}
        </ul>
        </>

)
}

export default FetchApi
