import { Container, Content, BoxA,BoxB, Section, ConfigImg } from "./style";

import Perfil from '../../img/perfil.svg'
import { Input } from "../Input";
import { Link } from "react-router-dom";
export function Header ({title}){
    return(
        <Container>
            <Content>
                <BoxB>
                    <h3>RocketMovies</h3>
                    <Input type="text" placeholder="Pesquisar pelo título"/>
                </BoxB>
                <BoxA>
                    <Section>
                        <img src={Perfil} alt='Perfil'/>
                        <ConfigImg>
                            <h4>Rodrigo Gonçalves</h4>
                            <Link to='/'>Sair</Link>
                        </ConfigImg>
                    </Section>
                </BoxA>
            </Content>
        </Container>
    )
}