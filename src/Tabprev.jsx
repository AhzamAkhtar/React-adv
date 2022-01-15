import React, { useState } from "react";
import menu from "./menu";
const Tabs = () => {
    const [items, setItems] = useState(menu)
    const filterMenu = (category) => {
        const UpdateItems = menu.filter((currElem) => {
            return currElem.category === category
        })
        setItems(UpdateItems)
    }
    return (
        <>
            <button className="btn btn-warning" onClick={() => filterMenu("breakfast")}>Breakfast</button>
            <button className="btn btn-warning" onClick={() => filterMenu("diner")}>dinner</button>
            <div>
                {items.map((elem) => {
                    const { id, name, image, description, price, category } = elem
                    return (
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{name}</h5>
                                        <p class="card-text">{category}</p>
                                        <p class="card-text">{description}</p>
                                        <a href="#" class="btn btn-primary">{price}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Tabs