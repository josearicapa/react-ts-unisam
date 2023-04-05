import * as React from 'react';
import Counter from './src/Counter';
import NumberList from './src/NumberListMemo';
import './style.css';
import styled, {css} from 'styled-components';

const myMixin = () => css`
color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 10px;
`;

const Button = styled.button`
  
  background-color: ${(props) =>
    props.variant === 'primary' ? 'blue' : 'gray'};
    ${myMixin()};

  &:hover {
    background-color: lightblue;
  }

    &:active{
      background:darkblue;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    
`;

export default function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);
  const [count, setCount] = React.useState(4);

  const addNumber = () => {
    const newNumbers = [...numbers];
    newNumbers.push(count);
    setNumbers(newNumbers);
    setCount(count + 1);
  };

  const removeNumber = () => {
    const newNumbers = [...numbers];
    newNumbers.pop();
    setNumbers(newNumbers);
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      <NumberList numbers={numbers} />
      <Container>
        <Button variant="primary" onClick={addNumber}>
          Add number
        </Button>
        <Button onClick={removeNumber}>Remove number</Button>
      </Container>
      <Counter />
    </React.Fragment>
  );
}
