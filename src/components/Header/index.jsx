import { Container,  BoxA, ConfigImg, Justifyinput } from "./style";

import Perfil from '../../img/perfil.svg'
import { Input } from "../Input";
import { Link } from "react-router-dom";
export function Header (){
    return(
        <Container>
            <h3>RocketMovies</h3>
            <Justifyinput>
            <Input type="text" placeholder="Pesquisar pelo título"/>
            </Justifyinput>     
                <BoxA>
                        <Link to='/profile'><img src='http://github.com/adonaikjr' alt='Perfil'/></Link>
                        <ConfigImg>
                            <h4>Rodrigo Gonçalves</h4>
                            <Link to='/'>Sair</Link>
                        </ConfigImg>
                </BoxA>
            
        </Container>
    )
}