import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/menu.css'

export const Menu = () =>{


    const [ menuHamburger , setMenuHamburger] = useState(false)


    return(
        <div>
            <div>
                {
                    menuHamburger ? <nav><li>Menu</li></nav>:<nav className="primernav">
                    <ul>
                        <li className="btnDropDown">Hamburgesa
                            <ul className="dropdownMenu">
                                <li><Link>Page 1</Link></li>
                                <li><Link>Page 2</Link></li>
                                <li><Link>Page 3</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                }
            </div>
        </div>
    )
}