import React from 'react'
const Header = (props) =>
        <header>
            <nav>
                <div className="container">
                    <span className="logo">AVENUE <span className="logo__thin">FASHION</span></span>
                    <ul className="menu">
                    {props.menu.map((item, i) =>
                    <li key={i}><a href={item.link}>{item.name.toUpperCase()}</a></li>
                    )}
                    </ul>
                </div>
            </nav>
        </header>

export default Header