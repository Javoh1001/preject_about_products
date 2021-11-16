import React from 'react'
import MaxsulotlarMenu from './MaxsulotlarMenu';
import {ProductAction, Products} from './MaxsulotlarMenu';
import {ProductActionStyle,ProductStyle} from './style';

const index = () => {
    return (
        <>
            <MaxsulotlarMenu /> 
            <ProductActionStyle>
                {
                    ProductAction.map((value)=>{
                        return(
                            <div className="product-action1">
                                <p>{value.title}</p>
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
                                <span className="img" size={'img'}>{value.foodImage}</span>
                                <p size={'foodName1'}>{value.foodName}</p>
                                <p size={'foodKategory1'}>{value.foodKategory}</p>
                                <p size={'foodCos1'}>{value.foodCost}</p>
                                <p size={'foodAddition1'}>{value.foodAddition}</p>
                                <span className="edit">{value.foodEdiztIcon}</span>
                                <span className="delete">{value.foodDeleteIcon}</span>
                            </div>
                         )
                     })
                }
            </ProductStyle>
        </>
    )
}

export default index
