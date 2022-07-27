import styled from 'styled-components';

export const Container = styled.div`
margin-left: 1rem;
display: flex;
flex-direction: column;
h1{
    display:flex;
    flex-direction:column;
    img{
        width:6rem;
    }
}
p{
    margin-top: 3rem;
}

`
export const Content = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-evenly;
width: 22.56rem;
height: 1.18rem; 



img{
    height: 16px;
    width: 16px;
   
}

svg{
    color: ${({theme}) => theme.COLORS.CORLOGO};
}

`