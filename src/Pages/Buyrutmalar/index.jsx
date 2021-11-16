import React from 'react';
import { Container } from './style'
import { Buyrutma } from './Buyrutma';
import {ForthPart,First,Second,Third,Forth} from './style';
import SearchMenu from '../../Components/App/SearchMenu'

const Buyrutmalar = () =>{
    return(
        <>
        <SearchMenu/>
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
                                            <div>
                                                <p>{value.userName}</p>
                                                <p>{value.userLastName}</p>
                                            </div>
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
                                    <div className="operator">
                                        <div className="operatorName">
                                            <span>{value.operatorText}</span>
                                            <p>{value.operatorName}</p>
                                        </div>
                                        <div className="Branch">
                                            <span>{value.branch}</span>
                                            <p>{value.branchProductName}</p>
                                            <p>{value.branchName}</p>
                                        </div>
                                        <div class="deleted">
                                            <span>{value.delete}</span>
                                        </div>
                                        <div class="edited">
                                            <span>{value.edit}</span>
                                        </div>
                                    </div>
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