import React from 'react';
import {
    Nav,
    Logo,
    List
} from './style';
import {Link} from 'react-router-dom';
import Bitmap from './Images/Bitmap.png';
import { Sidebar } from './Sidebar';
import {ReactComponent as Logout} from './Images/log-out.svg';

const Navbar = () =>{
    return(
        <div>
            <Nav>
                <Logo>
                    <img src={Bitmap} alt="Bitmap" />
                    <div className="logo-text">
                        <h4>Fast Food</h4>
                        <span>Online maxsulot sotuvi</span>
                    </div>
                </Logo>
                <List>
                    <ul>
                        <span className="left-line"></span>
                       {
                           Sidebar.map((value)=>{
                               return(
                                   <li className={value.cName}>
                                    <Link to={value.path}>
                                        <span>{value.icon}</span>
                                        {value.title}
                                   </Link>
                                   </li>
                               )
                           })
                       }
                      
                    </ul>
                
                    <Link to="/" className="exit">
                        <span><Logout /></span>
                        Chiqish
                    </Link>
                       
                </List>
            </Nav>
        </div>
    )
}
export default Navbar;