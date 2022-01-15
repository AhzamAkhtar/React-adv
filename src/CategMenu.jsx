import React from 'react'

export const CategMenu = ({filterMenu,catItems}) => {
    return (
        <div>
        {
            catItems.map((curClem)=>{
                return  <button className="btn btn-warning" onClick={() => filterMenu(curClem)}>{curClem}</button>
            })
        }
            {/*<button className="btn btn-warning" onClick={() => filterMenu("breakfast")}>Breakfast</button>
            <button className="btn btn-warning" onClick={() => filterMenu("diner")}>Dinner</button>
            <button className="btn btn-warning" onClick={() => filterMenu("lunch")}>Lunch</button>
            <button className="btn btn-warning" onClick={() => filterMenu("evening")}>Evening</button>
            <button className="btn btn-warning" onClick={() => filterMenu("timepass")}>TimePass</button>*/}
            {/*<button className='btn btn-warning' onClick={()=> setItems(menu)}>All</button>*/}
        </div>
    )
}
