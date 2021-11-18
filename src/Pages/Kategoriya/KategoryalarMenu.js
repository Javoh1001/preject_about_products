import React from 'react'
import { TopMenu, Menu } from './style'
import {ReactComponent as Plus} from './KategoriyaImage/plus.svg';
import {ReactComponent as Search} from './KategoriyaImage/search.svg';
import {ReactComponent as Filter} from './KategoriyaImage/filter.svg';
// import {ReactComponent as Oval} from './KategoriyaImage/oval1.svg';
import {ReactComponent as Edit} from './KategoriyaImage/edit-2.svg';
import {ReactComponent as Delete} from './KategoriyaImage/trash-2.svg';


export const ProductAction = [
    {
        id:1,
        title:'KATEGOIYA(UZ)',
    },
    {
        id:2,
        title:'KATEGOIYA(RU)',
    },
    {
        id:3,
        title:'BOSH KATEGORIYA',
    },{
        id:4,
        title:'ACTION',
    }
    
]


export const Products = [
    {
        id:1,
        foodName:'Burger uz',
        foodKategory:'Burget ru',
        foodCost:'-',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:2,
        foodName:'Burger uz',
        foodKategory:'Burget ru',
        foodCost:'-',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:3,
        foodName:'Burger uz',
        foodKategory:'Burget ru',
        foodCost:'-',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:4,
        foodName:'Burger uz',
        foodKategory:'Burget ru',
        foodCost:'-',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    // {
    //     id:5,
    //     foodImage:<Oval/>,
    //     foodName:'Lavash Mini',
    //     foodKategory:'Lavash',
    //     foodCost:'18000 UZS',
    //     foodAddition:'Lavash',
    //     foodEdiztIcon:<Edit/>,
    //     foodDeleteIcon:<Delete/>,
    // },
   
 
    
]


const KategoryalarMenu = () => {
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

export default KategoryalarMenu;
