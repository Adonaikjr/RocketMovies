import styled from 'styled-components';

export const Container = styled.header `
border-bottom: solid 1px ${({theme}) => theme.COLORS.BORDER};
height: 7.25rem; 
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
flex-wrap: wrap;
h3{
    font-family: Roboto Slab;
font-size: 24px;
font-weight: 700;
line-height: 32px;
color: ${({theme}) => theme.COLORS.CORLOGO};
  }

`;

export const Justifyinput = styled.div`  
  width: 40rem;
  padding-left: 12px;

`



export const BoxA = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
img{
  :hover {
    transform: scale(1.1);
  }
}
`;



export const ConfigImg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: right;
margin-right: 12px;
a{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-family: Roboto Slab;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
}

`;