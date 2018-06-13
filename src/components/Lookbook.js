import React from 'react'
const Lookbook = (props) =>
        <section className="lookbook">
            <ul className="lbk__list">
            {props.books.map((item, i) =>
                <li key={i} className="lbk__content">
                    <div className="image__position">
                        <div className="lbk__image"><img src={"images/home/lookbook/"+item.picture} alt={item.picture}/></div>
                    </div>
                    <div className="lbk__text">
                        <h2>{item.name.toUpperCase()}</h2>
                        <h3>LOOKBOOK</h3>
                        <p>{item.description}</p>
                        <a href={item.link}><button className="lbk__btn">VIEW NOW
                            <div className='layer'></div></button></a>
                    </div>
                </li>
            )}
            </ul>
        </section>

export default Lookbook