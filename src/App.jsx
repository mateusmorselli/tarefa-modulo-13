import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from './ThemeProvider'; // Importando o hook para alternar o tema

// Estilizando o contador
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  font-family: Arial, sans-serif;
  margin: 0;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
    transform: scale(1.1);
  }
`;

const CounterValue = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 20px;
  animation: fade-in 0.3s ease-in-out;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const App = () => {
  const { toggleTheme } = useTheme(); // Usando o hook para alternar o tema
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <Container>
      <h1>Contador</h1>
      <CounterValue>{count}</CounterValue>
      <div>
        <Button onClick={increment}>Incrementar</Button>
        <Button onClick={decrement}>Decrementar</Button>
        <Button onClick={reset}>Resetar</Button>
      </div>
      <Button onClick={toggleTheme}>Trocar Tema</Button>
    </Container>
  );
};

export default App;