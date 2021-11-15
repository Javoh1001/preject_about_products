import styled from 'styled-components';

export const Nav = styled.div`
    background-color:#fff;
    height:100vh;
    width:300px;
`
export const Logo = styled.div`
    width:100%;
    position:relative;
    top:28px;
    left:24px;
    display:flex;
    align-items:center;
    font-family: 'verdana';
    img{
        border-radius:50%;
        width:70px;
        height:70px;
    }
    .logo-text{
        font-family: 'verdana';
        padding-left:24px;
        color:#2D3A45;
        h4{
            font-size:16px;
        }
        span{
            font-size:12px;
        }
    }
`
export const List = styled.div`
    padding-top:58px;
    ul{
        // border-left:4px solid #FCB600;
        position:relative;
        .left-line{
            position:absolute;
            width:4px;
            height:350px;
            background-color:#FCB600;
            left:0;
        }
        .nav-text{
            list-style:none;
            height:48px;
            padding:0 12px 0 0;
            // display:flex;
            // justify-content:center;
           
            a{
                padding:15px 24px 15px 40px;
                text-decoration: none;
                color:#333;
                font-size:18px;
                width:100%;
                height:100%;
                display:flex;
                align-items: center;
                border-radius:0 4px 4px 0;
                font-family:'verdana';
                :hover{
                    background-color:#FCB600;
                }
                span{
                    width:36px;
                    height:36px;
                    border-radius:4px;
                    margin-right:12px;
                    background-color:#f5f5f5;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                }
            }
        }
        
    }

    .exit{
        height:48px;
        padding:15px 24px 15px 40px;
        display:flex;
        align-items: center;
        margin-top:150px;
        text-decoration: none;
        color:#333;
        font-family:'verdana';
        border-radius:0 4px 4px 0;
        font-size:18px;
        :hover{
            background-color:#FCB600;
        }
        span{
            width:36px;
            height:36px;
            border-radius:4px;
            margin-right:12px;
            background-color:#f5f5f5;
            display:flex;
            align-items:center;
            justify-content:center;
        }
        
    }
    
`