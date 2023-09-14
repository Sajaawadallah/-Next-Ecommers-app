import React from 'react'
import { NavMenu, Navlink, Navtitle } from './style'
import Link from 'next/link'

const NavColMenu = ({ navtitle, linkslist }) => {

    return (

        <>

            <NavMenu>
                <Navtitle>{navtitle}</Navtitle>
                {linkslist?.map((i) => (<li key={i.id}><Link href={i.link}><Navlink>{i.linktext}</Navlink></Link></li>))}

            </NavMenu>
        </>


    )
}

export default NavColMenu
