import React from 'react'
import MaxsulotlarMenu from './MaxsulotlarMenu';
import {ProductAction, Products} from './MaxsulotlarMenu';
import {ProductActionStyle,ProductStyle,Button} from './style';

const Maxsulotlar = () => {
    return (
        <>
            <MaxsulotlarMenu /> 
            <ProductActionStyle>
                {
                    ProductAction.map((value)=>{
                        return(
                            <div className="product-action1">
                               <ul>
                                    <li>{value.title}</li>
                               </ul>
                            </div>
                        )
                    })
                }   
            </ProductActionStyle>
            <ProductStyle>
                {
                     Products.map((value)=>{
                         return(
                            <div className="product-style">
                                <ul>
                                    <li className="img" size={'img'}>{value.foodImage}</li>
                                    <li>{value.foodName}</li>
                                    <li>{value.foodKategory}</li>
                                    <li>{value.foodCost}</li>
                                    <li>{value.foodAddition}</li>
                                    <li className="edit_delete"><span className="edit">{value.foodEdiztIcon}</span> <span>{value.foodDeleteIcon}</span></li>
                                </ul>
                            </div>
                         )
                     })
                }
            </ProductStyle>
            <Button>Yana Yuklash</Button>
        </>
    )
}

export default Maxsulotlar
