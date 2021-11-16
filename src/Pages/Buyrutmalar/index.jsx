import React from 'react';
import { Container } from './style'
import { Buyrutma } from './Buyrutma';
import {ForthPart,First,Second,Third,Forth} from './style';

const Buyrutmalar = () =>{
    return(
        <>
            <Container>
               
                {
                    Buyrutma.map((value)=>{
                        return(
                            <ForthPart>
                                <First>
                                   <div className="Times">
                                        <div className="first_part">
                                            <button>{value.button}</button> 
                                            <span>{value.buttonIcon}</span>
                                        </div>
                                        <div className="time">
                                            <span className="timeIcon">{value.timeIcon} </span>
                                            <span className="timeValue">{value.timeValue}</span>
                                        </div>
                                   </div>
                                </First>
                                <Second>
                                    <div className="User">
                                        <div className="userIcon">
                                            <span>{value.userIcon}</span>
                                            <p>{value.userName}</p>
                                        </div>
                                        <div className="userPhone">
                                            <span>{value.userPhoneIcon}</span>
                                            <h6>{value.userPhone}</h6>
                                        </div>
                                    </div>
                                </Second>
                                <Third>
                                    <div className="deliver">
                                        <div className="deliver-text">
                                            <div className="productCost">
                                                <span>{value.productCostIcon}</span>
                                                <p>{value.productCost}</p>
                                            </div>
                                            <div className="payment">
                                                <span>{value.paymeIcon}</span>
                                                <p>{value.payment}</p>
                                            </div>
                                            
                                        </div>
                                        <div className="deliverIcon1">
                                            <span>{value.deliverIcon}</span>
                                            <p>{value.deliverCost}</p>
                                        </div>
                                        <div className="sum">
                                            <p>{value.summaText}</p>
                                            <span>{value.summa}</span>
                                        </div>
                                    </div>
                                </Third>
                                <Forth>

                                </Forth>
                            </ForthPart>
                        )
                    })
                }
            </Container>
        </>
    )
}
export default Buyrutmalar;