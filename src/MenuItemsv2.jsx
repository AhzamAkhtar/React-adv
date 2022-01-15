import React from 'react'
export const MenuItemsv2 = ({items})=> {
    return (
        <>
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
