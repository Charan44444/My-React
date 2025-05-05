import UseFetch from "./UseFetch"

import img1 from './assets/monitor.jpg'
import img2 from './assets/mouse.jpg'
import img3 from './assets/processor.jpg'
import img4 from './assets/keyboard.jpg'
import Hardwares from './Hardwares'
import { useState } from 'react'


function Hardwareslist() {
    function handleDelete(id){
        const updatedList=hard.filter((e)=>e.id!=id)
        setHard(updatedList);
        console.log(hard)
    }
    const [hard,setHard] = useState([
        {
            id: 1,
            image: img1,
            name: 'Monitor',
            price: 6000
        },
        {
            id: 2,
            image: img2,
            name: 'Mouse',
            price: 500
        },
        {
            id: 3,
            image: img3,
            name: 'Processor',
            price: 10000
        },
        {
            id: 4,
            image: img4,
            name: 'Keyboard',
            price: 1000
        }
        
    ])
    function FetchApi(){
        return(
        <>
        <>Api Data Fetched</>
        <ul>
            {apiData.map((api)=><li>key={api.id}{api.title} {api.userid}</li>)}
        </ul>
        </>
        )
    }
    <ul>
                <li><strong>Title:</strong> {apiData.title}</li>
                <li><strong>User ID:</strong> {apiData.userId}</li>
                <li><strong>ID:</strong> {apiData.id}</li>
                <li><strong>Completed:</strong> {apiData.completed ? 'Yes' : 'No'}</li>
            </ul>
    const ListOfHardwares = hard.map(
        (hardd) =>
            <Hardwares key={hardd.id} image={hardd.image} name={hardd.name} price={hardd.price} delete={()=>handleDelete(hardd.id)}/>)

    return (
        <>
            {ListOfHardwares}
        
        </>
    )
}
export default Hardwareslist