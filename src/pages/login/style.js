import styled from "styled-components";
import Imgsecond from '../../img/secondimg.svg'


export const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
align-items: center;
margin: 0 auto;
padding: 0 auto;



`

export const BoxA = styled.div`
h1{
    height: 63px;
    font-family: Roboto Slab;
    font-size: 48px;
    font-weight: 700;
    line-height: 63px;
    letter-spacing: 0em;
    color: ${({theme}) => theme.COLORS.CORLOGO};
}
p{
    height: 18px;
    width: 344px;
    border-radius: nullpx;
    color: ${({theme}) => theme.COLORS.GRAY_300};
}
`;

export const BoxB = styled.div`
 h2{
    font-family: Roboto Slab;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;

 }
 div{
  width: 340px;
 }
 height: 343px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
`
export const Create_Account = styled.div`
font-family: Roboto Slab;
font-size: 16px;
font-weight: 400;
line-height: 21px;
text-align: center;
>a{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.CORLOGO};
}
margin-bottom: 1rem;

`

export const SignUp = styled.div`
margin: 0 auto;
padding: 0 auto;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const StyleImage = styled.div`

   background-image: url(${Imgsecond});
   width: 50%;
   height: 100vh;
`

export const Form = styled.form`
h2{
    margin-bottom: 12px;
}

`