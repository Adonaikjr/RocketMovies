import styled from 'styled-components';

export const Container = styled.button`
background: ${({theme}) => theme.COLORS.CORLOGO};
height: 56px;
width: 100%;
border: none;
border-radius: 10px;
cursor: pointer;
:hover {
    transform: scale(1.1);
}
`;
