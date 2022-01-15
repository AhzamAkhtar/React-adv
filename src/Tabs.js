import React, { useState } from "react";
import { CategMenu } from "./CategMenu";
import menu from "./menu";
import { MenuItemsv2 } from "./MenuItemsv2";
//import { MenuItems } from "./MenuItems";
const allCatValues= [...new Set(menu.map((currElem)=>{return currElem.category})),"all"]
console.log(allCatValues)
const Tabs = () => {
    const [items, setItems] = useState(menu)
    const [catItems,setCatItems]=useState(allCatValues)
    console.log(catItems)
    const filterMenu = (category) => {
        if(category==="all"){
            setItems(menu)
            return
        }
        const UpdateItems = menu.filter((currElem) => {
            return currElem.category === category
        })
        setItems(UpdateItems)
    }
    return (
        <>
            <CategMenu filterMenu={filterMenu} catItems={catItems} />
            <MenuItemsv2 items={items}/>
        </>
    )
}
export default Tabs