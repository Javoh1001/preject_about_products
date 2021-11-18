import React from 'react';
import MijozlarMenu from './MijozlarMenu'
import {ProductAction, Products} from './MijozlarMenu'
import {ProductActionStyle,ProductStyle,Container,Button} from './style';

const Mijozlar = () => {
    return (
        <>
            <MijozlarMenu /> 
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
                                    <li size={'foodName1'}>{value.mijozName}</li>
                                    <li size={'foodKategory1'}>{value.mijozPhone}</li>
                                    <li size={'foodCos1'}>{value.numberOf}</li>
                                    <li className="active">{value.status}</li>
                                    <li className="edit_and_delete"><span className="edit edit_delete">{value.map}</span><span className="edit edit_delete">{value.foodEdiztIcon}</span> <span className="edit_delete">{value.foodDeleteIcon}</span></li>
                                </ul>
                            </div>
                         )
                     })
                }
                <Button>Yana Yuklash</Button>
            </ProductStyle>
            </Container>
           
        </>
    )
}

export default Mijozlar;