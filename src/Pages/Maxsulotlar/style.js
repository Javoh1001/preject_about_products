import styled from 'styled-components';


export const Container = styled.div`

`

export const Menu = styled.div`
    width:100%;
    // position:fixed;
    // top:0;
    // z-index:10;
`
export const TopMenu = styled.div`
    background-color:#fff;
    // width:100%;
    height:80px;
    display:flex;
    align-items:center;
    .add_product{
        width:205px;
        display:flex;
        align-items:center;
        height:80px;
        padding-left:24px;
        padding-right:24px;
        border-left:2px solid #EDEFF3;
        border-right:2px solid #EDEFF3;
        p{
            font-size:12px;
            color:#2D3A45;
            font-family:'verdana';
        }
        span{
            width:36px;
            height:36px;
            border-radius:50%;
            background-color: #20D472;
            display:flex;
            align-items:center;
            justify-content:center;
            margin-right:14px;
            cursor:pointer;
        }
    }
    .filter_search{
        position:relative;
        margin-left:48px;
        margin-right:26px;
        input{
            border:none;
            border-radius:24px;
            width:300px;
            height:48px;
            background-color:#EDEFF3;
            padding-left:22px;
        }
        span{
            position:absolute;
            right:20px;
            top:16px;
            cursor:pointer;
        }
    }
    .filter{
        width:48px;
        height:48px;
        border-radius:24px;
        background-color:#EDEFF3;
        display:flex;
        align-items:center;
        justify-content:center;
        span{
            width:36px;
            height:36px;
            border-radius:18px;
            background-color:#FFFFFF;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
        }
    }
    
`

export const ProductActionStyle = styled.div`
    display:flex;
    align-items:center;
    margin-top:20px;
    background-color:#fff;
    align-items:center;
    height:36px;
    justify-content:space-around;
    width:100%;
    .product-action1{
      
        // display:flex;
        // align-items:center;
        // justify-content:space-around;
       
         ul{
             list-style:none;
             li{
                 width:200px;
                //  text-align:center;
                font-size:11px;
                text-transform:uppercase;
                color:#2D3A45;
                font-family:'verdana';
                font-weight:600;
                padding:6px;
                // border-left:1px solid #8D9BA8;
                padding-left:10px;
             }
         }   
        
        
    }
`

export const ProductStyle = styled.div`
    margin:20px 36px 0px 36px;
    // width:992px;
    .product-style{
        background-color:#fff;
        margin-bottom:20px;
        padding:0 15px;
        font-family:'verdana';
        font-size:13px;
        transition:all .3s linear;
        :hover{
            transform:translateY(-8px);
        }
        ul{
            display:flex;
            list-style:none;
            align-items:center;
            height:60px;
            
            li{
                width:230px;
                &:first-child{
                    width:80px;
                }
            }
        }
       
       
        .edit_delete{
            display:flex;
            align-items:center;
            justify-content:center;
           
            .edit{
                margin-right:50px;
            }
            span{
                width:36px;
                height:36px;
                border-radius:18px;
                box-shadow:0 0 6px 2px rgba(0,0,0,.2);
                cursor:pointer;
                display:flex;
                align-items:center;
                justify-content:center;
            }
        }
    }
`
export const Button = styled.button`
    margin:0px 36px 0px 36px;
    height:40px;
    font-family:'verdana';
    cursor:pointer;
`