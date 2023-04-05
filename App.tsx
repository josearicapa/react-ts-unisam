import * as React from 'react';
import Counter from './src/Counter';
import NumberList from './src/NumberListMemo';
import './style.css';
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
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
      <Button onClick={addNumber}>Add number</Button>
      <button onClick={removeNumber}>Remove number</button>
      <Counter />
    </React.Fragment>
  );
}
