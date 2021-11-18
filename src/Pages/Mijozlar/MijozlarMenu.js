import React from 'react'
import { TopMenu, Menu } from './style'
import {ReactComponent as Plus} from './MijozlarImage/plus.svg';
import {ReactComponent as Search} from './MijozlarImage/search.svg';
import {ReactComponent as Filter} from './MijozlarImage/filter.svg';
// import {ReactComponent as Oval} from './KategoriyaImage/oval1.svg';
import {ReactComponent as Edit} from './MijozlarImage/edit-2.svg';
import {ReactComponent as Delete} from './MijozlarImage/trash-2.svg';
import {ReactComponent as Map} from './MijozlarImage/map.svg';


export const ProductAction = [
    {
        id:1,
        title:'Mijoz ismi',
    },
    {
        id:2,
        title:'Telefon Raqami',
    },
    {
        id:3,
        title:'Buyrutmalar soni',
    },
    {
        id:4,
        title:'Status',
    },
    {
        id:5,
        title:'ACTION',
    }
    
]


export const Products = [
    {
        id:1,
        mijozName:'Dina Glen',
        mijozPhone:'+998901234567',
        numberOf:'5',
        status:'Active',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:1,
        mijozName:'Dina Glen',
        mijozPhone:'+998901234567',
        numberOf:'5',
        status:'Active',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:1,
        mijozName:'Dina Glen',
        mijozPhone:'+998901234567',
        numberOf:'4',
        status:'Active',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:1,
        mijozName:'Dina Glen',
        mijozPhone:'+998901234567',
        numberOf:'3',
        status:'Active',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:1,
        mijozName:'Dina Glen',
        mijozPhone:'+998901234567',
        numberOf:'2',
        status:'Active',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
   
 
    
]


const MijozlarMenu = () => {
    return (
        <>
           <Menu>
            <TopMenu>
                    <div className="add_product">
                        <span><Plus /></span>
                        <p>Yangi buyrutma <br /> qo'shish</p>
                    </div>
                    <div className="filter_search">
                        <input type="text"  placeholder="Qidirish" />
                        <span><Search/></span>
                    </div>
                    <div className="filter">
                        <span><Filter/></span>
                    </div>
            </TopMenu> 
                
                
           </Menu>  
        </>
    )
}

export default MijozlarMenu;
