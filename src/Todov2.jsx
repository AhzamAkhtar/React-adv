import React,{useState,useEffect} from 'react'
const Todo=()=>{
    const [inputData,setinputData]=useState("")
    const [items, setitems]=useState([])
    const addItems=()=>{
        if(!inputData){

        }else{
            setitems([...items,inputData])
            setinputData("")
            //console.log([...items,inputData])
        }
    }
    const deleteItems=(id)=>{
        const updateditems= items.filter((elem,ind)=>{
            return id!=ind
        })
        setitems(updateditems)
    }
    const removeAll=()=>{
        setitems([])
    }
    // Adding Data To Local Storage
    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(items))
    },[items])
    return(
        <>
            <h1>To Do List</h1>
            <button onClick={removeAll }>Clear All</button>
            <input placeholder="ENTER" value={inputData} onChange={(event)=>setinputData(event.target.value)}/>
            <button onClick={addItems}>+</button>
            <div>
                {items.map((elem,ind)=>{
                    return(
                        <>
                        <h3 key={ind}>{elem} <button onClick={()=>deleteItems(ind)}>x</button></h3>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Todo  