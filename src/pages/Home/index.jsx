import { Card } from "../../components/Card"
import { Container, BoxB, BoxA } from "./style"
import star from '../../img/star.svg'
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
export function Home (){
    return(
        <Container>
            <Header/>
            <BoxA>
                <h1>Meus Filmes</h1>
                <Button title=' + Adicionar filme'/>
            </BoxA>
            <BoxB>
                <Card title='Interestellar'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
            </BoxB>
            
        </Container>
    )
}