import styled, {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
`
export const Container = styled.div`
    background-color: #E5E5E5;
    width:1366px;
    height:100vh;
`
export const Ordered = styled.div`
    display:flex;
`
export const TopMenu = styled.div`
    background-color:#fff;
    width:100%;
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
        }
    }
    .add_input{
        border-right:2px solid #EDEFF3;
        height:100%;
        display:flex;
        align-items:center;
        ul{
            display:flex;
            align-items:center;
            width:592px;
            height:48px;
            background-color:#EDEFF3;
            margin-left:48px;
            margin-right:48px;
            list-style:none;
            justify-content:center;
            border-radius:26px;
            
            li a{
                text-decoration:none;
                display:inline-block;
                width:140px;
                text-align:center;
                font-size:14px;
                font-family:'verdana';
            }
            a.active{
                background-color:#fff;
                padding:7px 16px;
                border-radius:24px;
            }

        }
    }
    .turnOn{
        margin-left:36px;
        width:97px;
        height:48px;
        border-radius:24px;
        display:flex;
        align-items:center;
        background-color:#EDEFF3;
        padding:6px;
        .group{
            width:36px;
            height:36px;
            border-radius:50%;
            background-color:#fff;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
        }
        .rectangle{
            margin-left:22px;
            display:flex;
            align-items:center;
            justify-content:center;
            
        }
    }
`