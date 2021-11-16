import styled from 'styled-components';

export const Container = styled.div`
//    width:965px;
//    background-color:#fff;
//    height:150px;
//    margin:30px auto;
`
export const ForthPart = styled.div`
    display:flex;
    height:150px;
    background-color:#fff;
    width:965px;
    margin:30px auto;
`
export const First = styled.div`
    display:flex;
    flex-direction:column;
    border-right:1px solid red;
    height:100%;
    .Times{
        height:100%;
        padding-left:34px;
        padding-top:25px;
        .first_part{
            display:flex;
            width:218px; 
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
    width:249px;
    height:100%;
    border-right:1px solid red;
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
    width:272px;
    height:100%;
    border-right:1px solid red;
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
                padding-left:36px;
                p{
                    padding-left:4px;
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
    
`