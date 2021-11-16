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
    .product-action1{
        height:36px;
        background-color:#fff;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        &:nth-child(1){
            border-left:none;
        }
            
        p{
            font-size:11px;
            text-transform:uppercase;
            color:#2D3A45;
            font-family:'verdana';
            font-weight:600;
            padding:6px;
            border-left:1px solid #8D9BA8;
           
            padding-left:10px;
            
        }
        
    }
`
const getSize = (size)=>{
    switch(size){
        case 'img':
            return '200px';
        case 'foodName1':
            return '206px';
        case 'foodKategory1':
            return '133px';
        case 'foodCost1':
            return '95px';
        case 'foodAddition1':
            return '126px';
        default:
            return '30px'
    }
}


export const ProductStyle = styled.div`
    
    margin:20px 36px 20px 36px;
    .product-style{
        background-color:#fff;
        margin-bottom:20px;
        padding:0 15px;
        height:60px;
        display:flex;
        align-items:center;
        font-family:'verdana';
        font-size:13px;
        span{
            // margin-right:${({size})=>getSize(size)}
            margin-right:60px;
        }
        p{
            // margin-right:${({size})=>getSize(size)}
            margin-right:180px;
        }
        .edit,.delete{
            display:flex;
            align-items:center;
            justify-content:center;
            width:36px;
            height:36px;
            border-radius:18px;
            box-shadow:0 0 6px 2px rgba(0,0,0,.2);
            cursor:pointer;
        }
    }
`