import { Container, Content } from "./styled";

export function Tag({title,text}){
    return(
        <Container>
            {title}
        </Container>        
    )
};

export function Text(props){
    return(
        <Content>
            <p>{props.title}</p>
            <br/>
            <p>{props.text}</p>
        </Content>
    )
}

