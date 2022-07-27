import styled from 'styled-components';

export const Container = styled.div`

`;
export const Content=styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 45rem;
  margin-top: 5.5rem;
  margin-bottom: 24px;

`;
export const BoxA = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    button{
        width: 15rem;
        margin-top: 5.5rem;
    }
    h1{
        margin-top: 5.5rem;
        margin-left: 12px;
    }

`;

export const BoxB = styled.div`
     :hover {transform: scale(1.01);}
    width:70rem;
    height:16rem auto;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    border-radius: 12px;
    width: 80%;
    margin-bottom: 20px;
    flex-wrap: wrap;
    background: ${({theme}) => theme.COLORS.BACKGROUND_500};
    
    section{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
}
    
`


