// import { GiCow as IconeVaca } from "react-icons/gi";
import {
    CustomNavLink,
} from '@/components/Sidebar/styles'
import { PropsWithChildren } from "react";

import { NavLink } from 'react-router-dom'

export default function Sidebar(props: PropsWithChildren<{ color?: string }>){


    return <nav id="sidebar" style={{ backgroundColor: props.color }}  className="active">
        <ul className="list-unstyled components mb-5">
            <li className="active">
                <CustomNavLink to='/'>
                   <span className="fa fa-home"></span>
                    Início
                </CustomNavLink>
            </li>
            <li>
                <NavLink to='/login'>
                    <span className="fa fa-user"></span> Conta
                </NavLink>
            </li>
            <li>
                <a href="#"><span className="fa fa-sticky-note"></span> Blog</a>
            </li>
            <li>./code
                <a href="#"><span className="fa fa-cogs"></span> Services</a>
            </li>
            <li>
                <a href="#"><span className="fa fa-paper-plane"></span> Contacts</a>
            </li>
        </ul>
    </nav>
}