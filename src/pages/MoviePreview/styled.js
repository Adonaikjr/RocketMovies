import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 99%;
  >p{
    
    margin-left: 7.68rem;
    margin-top:2.5rem;
    a{
        margin-right: 1rem;
        align-items: center;
        font-family: Roboto Slab;
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.CORLOGO};
        :hover {
        transform: scale(1.1);
    }
}
}
`;

export const Justifycard = styled.div`
margin-top: 2rem;
div{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    >h1{
        width: auto;
        
        padding-left:7.75rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        >img{
            margin-left: 19px;
        }
    }
    
}



`

export const JustifyTag = styled.div`

    display: flex;
    height: auto;
    width:100%;
    margin-top: 40px;
    flex-wrap: wrap;
    padding-left: 7.75rem;
    margin: 0 auto;
    padding: 0 auto;
    

`
export const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    
`