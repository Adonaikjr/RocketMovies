import styled from 'styled-components';

export const Container = styled.div`
width: 7rem;
height: 3.5rem;
border-radius: 8px;
background:${({theme}) => theme.COLORS.BACKGROUND_900};
margin-left: 1rem;
display: flex;
align-items: center;
font-family: Roboto;
font-size: 16px;
font-weight: 400;
flex-wrap: wrap;
h4{
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    svg{
        color: ${({theme}) => theme.COLORS.CORLOGO};
        height: 24px;
        width: 22px;
    }
}
cursor: pointer;
`

export const Content = styled.div`


cursor: pointer;
width: 10rem;
height: 3.5rem;
border-radius: 8px;
border: 2px dashed #948F99;
background:transparent;
margin-left: 1rem;
display: flex;
align-items: center;
font-family: Roboto;
font-size: 16px;
font-weight: 400;
flex-wrap: wrap;
h4{
    text-align: center;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    svg{
        color: ${({theme}) => theme.COLORS.CORLOGO};
        height: 24px;
        width: 22px;
        transform: rotate(45deg);
    }
}
`
