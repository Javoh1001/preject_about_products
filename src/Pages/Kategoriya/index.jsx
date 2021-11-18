import React from 'react';
import KategoryalarMenu from './KategoryalarMenu';
import {ProductAction, Products} from './KategoryalarMenu'
import {ProductActionStyle,ProductStyle,Container} from './style';

const Kategoriya = () => {
    return (
        <>
            <KategoryalarMenu /> 
            <ProductActionStyle>
                {
                    ProductAction.map((value)=>{
                        return(
                            <div className="product-action1">
                                <ul className="product_act">
                                    <li>{value.title}</li>
                                </ul>
                            </div>
                        )
                    })
                }   
            </ProductActionStyle>
            <Container>
            <ProductStyle>
                {
                     Products.map((value)=>{
                         return(
                            <div className="product-style">
                                <ul>
                                    <li size={'foodName1'}>{value.foodName}</li>
                                    <li size={'foodKategory1'}>{value.foodKategory}</li>
                                    <li size={'foodCos1'}>{value.foodCost}</li>
                                    <li className="edit_and_delete"><span className="edit edit_delete">{value.foodEdiztIcon}</span> <span className="edit_delete">{value.foodDeleteIcon}</span></li>
                                </ul>
                            </div>
                         )
                     })
                }
            </ProductStyle>
            </Container>
           
        </>
    )
}

export default Kategoriya;