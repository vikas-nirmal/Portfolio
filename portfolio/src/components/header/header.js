import React, { useState } from 'react'
import "./header.css"
import Mobile from './mobile/index'
import Web from './web/index'

function Header() {
    const [isOpen, setIsOpen]= useState(false);
    return (
        <div className="header">
            <div className="logo">
                PORTFOLIO
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web/>
                </div>
                <div className="mob-menu">
                <i class="fi-rr-apps"></i>
                    <Mobile/>
                </div>
            </div>
        </div>
    )
}

export default Header
