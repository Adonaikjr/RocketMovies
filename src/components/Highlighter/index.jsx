import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { Container, Content } from './styled'

export function Highlighter({title}){ 

        return(
            <Container>
                <h4>{title}<FaTimes/></h4>
            </Container>            
        )
};

export function Newbookmark({title}){
    return(
        <Content>
            <h4>{title}<FaTimes/></h4>
        </Content>
    )
}




