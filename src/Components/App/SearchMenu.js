import React from 'react'
import { TopMenu, Menu } from './style'
import {ReactComponent as Plus} from './AppImage/plus.svg';
import {ReactComponent as Group} from './AppImage/Group.svg';
import {ReactComponent as Rectangle} from './AppImage/Rectangle.svg';
import {ReactComponent as Rectangle2} from './AppImage/Rectangle2.svg';


const SearchMenu = () => {
    return (
        <>
           <Menu>
            <TopMenu>
                    <div className="add_product">
                        <span><Plus /></span>
                        <p>Yangi buyrutma <br /> qo'shish</p>
                    </div>
                    <div className="add_input">
                    <ul>
                        <li><a href="#" class="active">Yangi</a></li>
                        <li><a href="#">Qabul qilingan</a></li>
                        <li><a href="#">Jo'natilgan</a></li>
                        <li><a href="#">Yopilgan</a></li>
                    </ul>
                    </div>
                    <div class="turnOn">
                        <span className="group"><Group /></span>
                        <span className="rectangle"><Rectangle /> &nbsp; <Rectangle2 /></span>
                    </div>
                </TopMenu> 
                
                
           </Menu>  
        </>
    )
}

export default SearchMenu
