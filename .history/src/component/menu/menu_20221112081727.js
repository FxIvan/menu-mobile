import React from 'react'
import { Link } from 'react-router-dom'
import '../css/menu.css'

export const Menu = () =>{
    return(
        <div>
            <div>
                <nav class="primernav">
                    <ul>
                        <li class="btnDropDown"> 
                            <ul>
                                <li><Link>Page 1</Link></li>
                                <li><Link>Page 2</Link></li>
                                <li><Link>Page 3</Link></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}