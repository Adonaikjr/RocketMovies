import styled from 'styled-components';

export const Container = styled.header `
border-bottom: solid 1px ${({theme}) => theme.COLORS.BORDER};
height: 116px; 
display: flex;
justify-content: space-between;
align-items: center;
`;
export const Content = styled.div `
  display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  h3{
    font-family: Roboto Slab;
font-size: 24px;
font-weight: 700;
line-height: 32px;
color: ${({theme}) => theme.COLORS.CORLOGO};
  }

`;

export const BoxB = styled.div`
display: flex;
width: 70%;
justify-content: space-between;
align-items: center;
div{
    width: 663px;
    padding-left: 12px;
}
`;

export const BoxA = styled.div`

`;

export const Section = styled.section`
    display: flex;
    flex-direction: row-reverse;
`;

export const ConfigImg = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
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