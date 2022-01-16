import React,{useState,useEffect} from 'react'
const getLocalItems=()=>{
    let list=localStorage.getItem("lists")
    if (list){
        return JSON.parse(localStorage.getItem("lists"))
    }else{
        return []
    }
}  
const Todov2=()=>{
    const [inputData,setinputData]=useState("")
    const [items, setitems]=useState(getLocalItems)
    const [toggleSubmit,setToggleSubmit]=useState(true)
    const [isEditItem,setIsEditItem]=useState(null)
    const addItems=()=>{
        if(!inputData){
            alert("Plzz Enter Something")
        }else if(inputData && !toggleSubmit){
            setitems(
                items.map((elem)=>{
                    if(elem.id===isEditItem){
                        return{...elem,name:inputData}
                    }
                    return elem
                })
            )
            setToggleSubmit(true)
            setinputData("")
            setIsEditItem(null)
        }
        else{
            const allinputData={id: new Date().getTime().toString(), name:inputData}
            setitems([...items,allinputData])
            setinputData("")
            //console.log([...items,inputData])
        }
    }
    const deleteItems=(index)=>{
        const updateditems= items.filter((elem)=>{
            return index!=elem.id
        })
        setitems(updateditems)
    }
    const editItem=(id)=>{
        let newEditItem=items.find((elem)=>{
            return elem.id===id
        })
        console.log(newEditItem)
        setToggleSubmit(false)
        setinputData(newEditItem.name)
        setIsEditItem(id )
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
                {items.map((elem)=>{
                    return(
                        <>
                        <h3 key={elem.id}>{elem.name} <button onClick={()=>deleteItems(elem.id)}>x</button></h3>
                        <button onClick={()=>editItem(elem.id)}>Edit</button>
                        <hr/>
                        </>
                    )
                })}
            </div>
        </>
    )
}
export default Todov2  