import styled from 'styled-components';

export const Container = styled.div`
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5px;
  border-radius: 5px;
  width: 7.5rem;
  margin-left: 1rem;
 
  
`;

export const Content = styled.div`
margin: auto;
padding: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top:40px;
 
  p{
  padding-left:7.75rem;
  padding-right: 7.75rem;
}

`
