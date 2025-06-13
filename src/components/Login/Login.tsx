import {useNavigate} from 'react-router-dom';
import { GenericContainer} from './styles';


export function LoginForm() {
    return(
        <>
        <GenericContainer>
            <input placeholder='login'></input>
            <input placeholder='senha'></input>
            <button type='submit'>entrar</button>

        </GenericContainer>
        </>
    )
}