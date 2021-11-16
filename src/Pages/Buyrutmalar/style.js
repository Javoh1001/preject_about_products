import styled from 'styled-components';

export const Container = styled.div`
    width:1100px;
//    background-color:#fff;
//    height:150px;
//    margin:30px;
`
export const ForthPart = styled.div`
    display:flex;
    height:150px;
    background-color:#fff;
    width:1100px;
    margin:30px;
    border-radius:8px;
    transition:all .4s linear;
    :hover{
        box-shadow:0 0 10px 2px rgba(0,0,0,.1);
        transform:translateY(-8px)
    }
`
export const First = styled.div`
    display:flex;
    flex:2;
    flex-direction:column;
    border-right:2px solid #EDEFF3;
    height:100%;
    .Times{
        height:100%;
        padding-left:34px;
        padding-top:25px;
        .first_part{
            display:flex;
            // width:220px; 
           
            padding-bottom:28px;
            button{
                width:90px;
                height:36px;
                border-radius:18px;
                background-color:#20D472;
                border:none;
                font-family:'verdana';
                font-size:18px;
                color:#fff;
                font-weight:300;
            }
            span{
                width:36px;
                height:36px;
                background-color:#EDEFF3;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                margin-left:16px;
                cursor:pointer;
            }
              
        }
        .time{
            display:flex;
            align-items:center;
            .timeIcon{
                display:flex;
            }
            .timeValue{
                font-size:20px;
                color: #2D3A45;
                font-family:'verdana';
                margin-left:12px;
            }
        } 
    }

    
    
  
`
export const Second = styled.div`
    // width:260px;
    flex:2;
    height:100%;
    border-right:2px solid #EDEFF3;
    .User{
        height:100%;
        padding-top:25px;
        padding-left:34px;
        .userIcon{
            display:flex;
            padding-bottom:20px;
            // align-items:center;
            span{
                margin-top:4px;
            }
            p{
                font-size:20px;
                color:#2D3A45;
                font-family:'verdana';
                padding-left:18px;
            }
        }
        .userPhone{
            display:flex;
            align-items:center;
            h6{
                margin-left:18px;
                font-size:14px;
                color:#2D3A45;
                font-family:'verdana';
            }
        }
    }
   
    
`
export const Third = styled.div`
    // width:320px;
    flex:3;
    height:100%;
    border-right:2px solid #EDEFF3;
    .deliver{
        padding-top:25px;
        padding-left:35px;
        font-family:'verdana';
        .deliver-text{
            display:flex;
            .productCost{
                display:flex;
                span{
                    padding-right:10px;
                }
            }
            .payment{
                display:flex;
                padding-left:80px;
                p{
                    padding-left:10px;
                }
            }
        }
        .deliverIcon1{
            margin-top:15px;
            display:flex;
            align-items:center;
            padding-bottom:18px;
            span{
                padding-right:10px;
            }
        }
        .sum{
            p{
                color:#8D9BA8;
                font-size:11px;
            }
            span{
                font-size:20px;
            }
        }
    }
`
export const Forth = styled.div`
    height:100%;
    // width:250px;
    flex:2;
    .operator{
        position:relative;
        padding-top:25px;
        padding-left:35px;
        font-family:'verdana';
        .operatorName{
            
            span{
                font-size:11px;
                color:#8D9BA8;
            }
            p{
                color:#2D3A45;
                font-size:14px;
                
            }
        }
        .Branch{
            padding-top:12px;
            span{
                font-size:11px;
                color:#8D9BA8;
            }
            p{
                color:#2D3A45;
                font-size:14px;
                
            }
        }
        .deleted{
            span{
                width:40px;
                height:40px;
                background-color:#fff;
                border-radius:50%;
                display:flex;
                position:absolute;
                right:-20px;
                bottom:0;
                box-shadow:0 0 2px 4px rgba(0,0,0,.1);
                align-items:center;
                justify-content:center;
                cursor:pointer;
            }
        }
        .edited{
            span{
                width:40px;
                height:40px;
                background-color:#fff;
                border-radius:50%;
                display:flex;
                position:absolute;
                right:-20px;
                top:20px;
                box-shadow:0 0 2px 4px rgba(0,0,0,.1);
                align-items:center;
                justify-content:center;
                cursor:pointer;
            }
        }
    }
`