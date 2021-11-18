import React from 'react'
import { TopMenu, Menu } from './style'
import {ReactComponent as Plus} from './FiliallImage/plus.svg';
import {ReactComponent as Search} from './FiliallImage/search.svg';
import {ReactComponent as Filter} from './FiliallImage/filter.svg';
// import {ReactComponent as Oval} from './KategoriyaImage/oval1.svg';
import {ReactComponent as Edit} from './FiliallImage/edit-2.svg';
import {ReactComponent as Delete} from './FiliallImage/trash-2.svg';
import {ReactComponent as Map} from './FiliallImage/map.svg';


export const ProductAction = [
    {
        id:1,
        title:'Filiall Nomi(UZ)',
    },
    {
        id:2,
        title:'Filiall Nomi(RU)',
    },
    {
        id:3,
        title:'Moljal',
    },
    {
        id:4,
        title:'Ish vaqti',
    },
    {
        id:5,
        title:'ACTION',
    }
    
]


export const Products = [
    {
        id:1,
        foodName:'Shaxriston',
        foodKategory:'Shaxriston',
        foodCost:'metro roparasida',
        workTime:'09:00- 18:00',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:2,
        foodName:'Shaxriston',
        foodKategory:'Shaxriston',
        foodCost:'metro roparasida',
        workTime:'09:00- 18:00',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:3,
        foodName:'Shaxriston',
        foodKategory:'Shaxriston',
        foodCost:'metro roparasida',
        workTime:'09:00- 18:00',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:4,
        foodName:'Shaxriston',
        foodKategory:'Shaxriston',
        foodCost:'metro roparasida',
        workTime:'09:00- 18:00',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
    {
        id:5,
        foodName:'Shaxriston',
        foodKategory:'Shaxriston',
        foodCost:'metro roparasida',
        workTime:'09:00- 18:00',
        map:<Map/>,
        foodEdiztIcon:<Edit/>,
        foodDeleteIcon:<Delete/>,
    },
   
 
    
]


const FiliallarMenu = () => {
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

export default FiliallarMenu;
