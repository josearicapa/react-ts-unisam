import React = require('react');

const NumberList = ({ numbers }) => {
  const [seletedNumber, setSeletedNumber] = React.useState(0);

  const sum = React.useMemo(() => {
    console.log('calculating sum...');
    return numbers.reduce((total, curr) => {
      return total + curr;
    }, 0);
  }, [numbers]);

  return (
    <React.Fragment>
      <h1>List of numbers </h1>
      <ul>
        {numbers.map((num) => (
          <li key={num} onClick={() => setSeletedNumber(num)}>
            {num}
          </li>
        ))}
      </ul>
      <h1>The sum is: {sum} </h1>
      <h1>The number selected is: {seletedNumber} </h1>
    </React.Fragment>
  );
};

export default NumberList;
