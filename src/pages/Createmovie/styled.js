import styled from 'styled-components';

export const Container = styled.div`
  gap: 40px;
  input{
    padding-left:1rem ;
  }
  h3{
    font-family: Roboto Slab;
font-size: 20px;
font-weight: 400;
line-height: 26px;
letter-spacing: 0em;
text-align: left;
margin: 1rem;
  }
  h1{
    font-family: Roboto Slab;
font-size: 36px;
font-weight: 500;
line-height: 47px;
letter-spacing: 0em;
text-align: left;
margin: 1rem;
  }

  p{
    margin-left: 7.6rem;
    
 height: 9.5rem;
 display: flex;
 align-items: end;
svg{
    margin-left: 1rem;
}
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

export const Form = styled.form`
height: 50rem;

margin: 5.5rem 7.6rem 2rem 7.6rem;

>header{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
   margin: 1rem 1rem;
    div{
        width: 33.5rem;
    }
}

article{
    margin:  1rem 1rem;

    div{
        height: 17.125rem;
        input{
            height: 17.125rem;
        }
    }
}


footer{
    display: flex;
    justify-content: space-between;
    margin: 1rem 1rem;
    flex-wrap: wrap;
    .ColorsButton{
        button{
        color: ${({theme}) => theme.COLORS.CORLOGO};
        background: ${({theme}) => theme.COLORS.BACKGROUND_600};
    }
}
    button{
        margin-top: 1rem;
        width: 33rem;
        height: 3.5rem;
        margin-right: 1rem;
        font-family: Roboto Slab;
        font-size: 16px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: center;

        
    }
}

`

export const Section = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
margin: 1rem 1rem;
height: 5.5rem;
border-radius: 8px;
background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
`
