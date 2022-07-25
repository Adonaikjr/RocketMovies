import styled from 'styled-components';

export const Container = styled.div`
`;

export const BoxA = styled.div`
font-family: Roboto Slab;
font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: center;

height:144px;
p{
    :hover {
        transform: scale(1.1);
    }
    margin-left: 16px;
    img{
        margin-right: 5px;
    }
}
background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};
a{
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.CORLOGO};
   
}
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

export const BoxB = styled.div`
 img{
    margin-top: -100px;
 }

 display: flex;
 justify-content: center;
 
`

export const Changeimg = styled.div`
    margin-left: -70px;
    margin-top: 70px;
    cursor: pointer;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div, button{
    margin-top: 12px;
    width: 348px;
    height: 56px;
}
button{
    font-family: Roboto Slab;
font-size: 16px;
font-weight: 500;
line-height: 21px;
letter-spacing: 0em;
text-align: center;

}
`