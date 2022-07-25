import { Container } from "./style";
import star from '../../img/star-1.svg'
import { Tag } from "../Tag";
export function Card (props){
    return(
        <Container>
            <h1>
                {props.title}
                <img src={star}/>
            </h1>
            <p>{props.text}</p>
            <section>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
            </section>
        </Container>
    )
}