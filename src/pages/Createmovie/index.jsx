import { Container, Form, Section } from "./styled";
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Highlighter } from '../../components/Highlighter'
import { Newbookmark } from "../../components/Highlighter";




export function Createmovie(){
    return(
        <Container>
            <p><Link to ='/home'> <FaArrowLeft/> Voltar</Link></p>
            <Form>
                <h1>Novo Filme</h1>
                <header >
                    <Input placeholder='Titúlo'/>
                    <Input placeholder='Sua nota (de 0 a 5)'/>
                </header>
                <article>
                    <Input placeholder='Observações'/>
                </article>
                <h3>Marcadores</h3>
                <Section>
                    <Highlighter title='React'/>
                    <Newbookmark title='Novo marcador'/>
                </Section>
                <footer>
                    <div className="ColorsButton">
                     <Button title='Excluir filme'/>
                    </div> 
                    <Link to='/moviepreview'>
                    <Button title='Salvar alterações'/>
                    </Link>
                </footer>
            </Form>
        </Container>
    )
}