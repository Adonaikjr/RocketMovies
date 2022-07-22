import { Container, BoxA, BoxB, Create_Account, SignUp, StyleImage, Form } from "./style.js";
import Imgsecond from '../../img/secondimg.svg'
import { Input } from "../../components/Input/index.jsx";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { Button } from "../../components/Button/index.jsx";
import { Link } from "react-router-dom";

export function Login  (){
    return(
        <Container>
            <SignUp>
                <BoxA>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>
                </BoxA>
                    <BoxB>
                        <Form>
                        <h2>Faça seu login</h2>
                        <Input placeholder='E-mail' icon={FaRegEnvelope} />
                        <Input placeholder='Senha' icon={FaUnlock} width={30} />
                        <Button title='Entrar'/>
                        </Form>
                        <Create_Account>
                            <Link to='/create'>Criar Conta</Link>
                        </Create_Account>
                    </BoxB>
            </SignUp>
            <StyleImage>
                <img src={Imgsecond}/>
            </StyleImage>
        </Container>
    )
}