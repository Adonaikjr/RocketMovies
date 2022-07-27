import { Card, ComponentImgProfile } from "../../components/Card";
import { Container, Justifycard, JustifyTag } from "./styled";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Tag } from "../../components/Tag";

export function Moviepreview(){
    
    return(
        <Container>
            <p><Link to ='/home'> <FaArrowLeft/> Voltar</Link></p>
            <Justifycard><Card title='Interestelar'/></Justifycard>    
                <ComponentImgProfile text='Por adonai junior'time='23/05/22 às 08:00'/>
                <JustifyTag>
                    <Tag title='Ficção'/>
                    <Tag title='Ação'/>
                    <Tag title='Terror'/>
                </JustifyTag>                    
        </Container>
    )
}