
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BackGroundContainer, GenericContainer, MenuTitle } from '../styles';

export function LoginForm() {
    const [name, setName] = useState('');
  const navigate = useNavigate();

    const start = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('userName', name);
        navigate('/Chat')
    }

  return (
    <BackGroundContainer>
    <GenericContainer>
      <form onSubmit={start}>
        <MenuTitle>
           <h1>ChatReact</h1> 
        </MenuTitle>
        <input type="text" placeholder="login" value={name}  onChange={e => setName(e.target.value)}/>
        <input type="password" placeholder="senha" />
        <button type="submit">entrar</button>
      </form>
    </GenericContainer>
    </BackGroundContainer>
  );
}

