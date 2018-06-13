import React from 'react'
const Items = (props) =>
        <section className="most__popular__items clearfix">
            <div className="container">
                <ul className="item__choice">
                    {props.filters.map((item, i) =>
                    <li key={i}><a href={item.link}>{item.name.toUpperCase()}</a></li>
                    )}
                </ul>

                <div className="items grid">
                    {props.goods.map((item, i) =>
                    <div key={i} className="grid__item">
                        <div className="item__placing__small">
                            <p className="items__price">
                                <sup>&pound;</sup> <span className={item.sale?"strike":""}>{item.price}</span> {item.sale?<sup>&pound;</sup>:""}
                                {item.sale?item.sale:""}</p>
                            <div className="item__position"><img src={"images/home/items/"+item.picture} alt={item.picture}/></div>
                            <div className="item__active__hover item__hover__shadow">
                                <p className="info__header">{item.name}</p>
                                <p className="info__desc">{item.description}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </section>
        
export default Items