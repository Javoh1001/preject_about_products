import React from 'react'
import { TopMenu, Menu } from './style'
import {ReactComponent as Plus} from './MaxsulotImages/plus.svg';
import {ReactComponent as Search} from './MaxsulotImages/search.svg';
import {ReactComponent as Filter} from './MaxsulotImages/filter.svg';
import {ReactComponent as Oval} from './MaxsulotImages/oval1.svg';
import {ReactComponent as Edit} from './MaxsulotImages/edit-2.svg';
import {ReactComponent as Delete} from './MaxsulotImages/trash-2.svg';


export const ProductAction = [
    {
        id:1,
        title:'Maxsulot',
    },
    {
        id:2,
        title:'Kategoriya',
    },
    {
        id:3,
        title:'Narxi',
    },
    {
        id:4,
        title:'Qoshimcha',
    },
    {
        id:5,
        title:'Action',
    }
]


export const Products = [
    {
        id:1,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:2,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:3,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:4,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:5,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:6,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:7,
        foodImage:<Oval/>,
        foodName:'Lavash Mini',
        foodKategory:'Lavash',
        foodCost:'18000 UZS',
        foodAddition:'Lavash',
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
 
    
]


const MaxsulotlarMenu = () => {
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

export default MaxsulotlarMenu;
