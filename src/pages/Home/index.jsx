import { Card } from "../../components/Card"
import { Container, BoxB, BoxA, Content } from "./style"
import star from '../../img/star.svg'
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Tag } from "../../components/Tag"
import { Link } from 'react-router-dom'


export function Home (){
    return(
        <Container>
            <Header/>
            <BoxA>
                <h1>Meus Filmes</h1>
                <Link to='/createmovie'>
                    <Button title=' + Adicionar filme'/>
                </Link>
            </BoxA>
            <Content>
            <BoxB>
                <Card title='Interestellar' text='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que te'/>
                <section>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                </section>
            </BoxB>
            <BoxB>
                <Card title='Interestellar' text='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que te'/>
                <section>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                </section>
            </BoxB>
            <BoxB>
                <Card title='Interestellar' text='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que te'/>
                <section>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                <Tag title='Ficção Científica'/>
                </section>
            </BoxB>
            </Content>
        </Container>
    )
}