// styles.ts
import styled from 'styled-components';

export const GenericContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px;

  h1 {
    font-size: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 300px;
    height: 100vh;
  }

  input {
    padding: 10px;
    font-size: 1rem;
    width: 100%;
  }

  button {
    background-color: aqua;
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    width: 100%;
  }
`;

export const BackGroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  color: white;
  display: flex;
  justify-content: center;
  padding: 2rem;
  align-items: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  flex-direction: column;`
;

export const MenuTitle = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid ;

  h1 {
    margin-bottom: 1rem;
    color: black;
    font-size:50px;
  }

  p {
    font-size: 5rem;
  }
`;

export const BorderForm = styled.div`

`