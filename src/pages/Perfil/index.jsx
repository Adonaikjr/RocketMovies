import { Container, BoxA, BoxB, Changeimg, Form } from "./style";
import imgperfil from '../../img/perfil.svg'
import alterar from '../../img/alterar.svg'
import Seta from '../../img/seta.svg'
import { Link } from "react-router-dom";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { FaUser } from 'react-icons/fa'
import { MdEmail,MdOutlinePassword } from 'react-icons/md'
export function Perfil(){
    return(
        <Container>
            <BoxA>
                <p><Link to ='/home'> <img src={Seta}alt='voltar'/>Voltar</Link></p>
            </BoxA>
            <BoxB>
                <img src={imgperfil} alt='perfil' width={186} height={186}/>
                <Changeimg>
                    <img src={alterar} alt='alterar profile' width={48} height={48}/>
                </Changeimg>
            </BoxB>
            <Form>
                <Input placeholder='Rodrigo Gonçalves' icon={FaUser} />
                <Input placeholder='rodrigo@gmail.com' icon={MdEmail}/>
                <Input placeholder='Senha atual' icon={MdOutlinePassword}/>
                <Input placeholder='Nova senha' icon={MdOutlinePassword}/>
                <Button title='Salvar'/>
            </Form>
        </Container>
    )
}