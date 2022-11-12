import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/menu.css'

export const Menu = () =>{

    const [ open , setOpen] = useState(false)

    const handleMenu = () =>{
        setOpen(!open)
    }

    return(
        <div>
            <div>
                <div>
                    <button onClick={handleMenu}>Click</button>
                </div>
                { open ?  
                <nav>
                    <ul>
                        <li><Link>Link 1</Link></li>
                        <li><Link>Link 2</Link></li>
                        <li><Link>Link 3</Link></li>
                    </ul>
                </nav>
                :
                <nav><ul></ul></nav>
                }
            </div>
        </div>
    )
}