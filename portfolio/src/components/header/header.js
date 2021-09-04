import React, { useState } from 'react'
import "./header.css"
import Mobile from './mobile/index'
import Web from './web/index'

function Header() {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <div className="header">
            <div className="logo">
               MY PORTFOLIO
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mob-menu">
                    <div onClick={()=>setIsOpen(!isOpen)}>
                        <i className="fi-rr-apps menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header
