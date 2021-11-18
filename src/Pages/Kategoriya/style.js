import styled from 'styled-components';


export const Container = styled.div`
    // width:992px;
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
    height:36px;
    display:flex;
    align-items:center;
    // justify-content:space-around;
    margin-top:20px;
    width:100%;
    background-color:#fff;
    .product-action1{
        .product_act{
            list-style:none;
            padding-left:40px;
            li{
                width:280px;
                font-size:11px;
                text-transform:uppercase;
                color:#2D3A45;
                font-family:'verdana';
                font-weight:600;
                padding:6px;
                padding-left:10px;
                // text-align:center;
            }
        }  
        
    // }
`



export const ProductStyle = styled.div`
    margin:20px 36px 0px 36px;
    .product-style{
        background-color:#fff;
        margin-bottom:20px;
        padding:0 15px;
        height:60px;
        display:flex;
        align-items:center;
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
            // justify-content:space-around;
            width:100%;
            li{
                width:280px;
                // text-align:center;
                margin-left:30px;
            }
            .edit{
                margin-right:50px;
            }
            .edit_and_delete{
                display:flex;
            }
            .edit_delete{
                display:flex;
                align-items:center;
                justify-content:center;
                width:36px;
                height:36px;
                border-radius:18px;
                box-shadow:0 0 6px 2px rgba(0,0,0,.2);
                cursor:pointer;
                flex-direction:column;
            }
        }

        
    }
`
