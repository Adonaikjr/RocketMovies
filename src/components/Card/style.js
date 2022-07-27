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
  
}

`
export const Content = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: flex-start;
gap:12px;
width: 100%;
height: 1.18rem; 
margin-top:2rem;
padding-left:7.75rem;
margin-bottom: 2.5rem;

img{
    height: 16px;
    width: 16px;
   
}

svg{
    background: ${({theme}) => theme.COLORS.COLOGO};
}

`