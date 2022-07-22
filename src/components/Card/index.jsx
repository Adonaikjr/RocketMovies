import { Container } from "./style";

export function Card (props){
    return(
        <Container>
            <h1>{props.title}</h1>
        </Container>
    )
}