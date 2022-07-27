import { Container, Content } from "./style";
import star from '../../img/star-1.svg'
import Imgperfil from '../../img/perfil.svg';
import { FaRegClock } from 'react-icons/fa'


export function Card ({title, text, children}){
    return(
        <Container>
            <h1>
                {title}
                <img src={star}/>
            </h1>
            {text}
            {children}
        </Container>
    )
};

export function ComponentImgProfile({text, time}){
    return(
        <Content>
        <img src={Imgperfil} alt="imagem de perfil"/>
            {text}
            <FaRegClock/>
            {time}
        </Content>
    )
}


