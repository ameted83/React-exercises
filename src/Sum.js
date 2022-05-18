import React from "react";

const Sum = (props) => {
  const sum = props.numbers.reduce((result, number) => result + number, 0);
  return (
    <div>
      <h1>The sum is: {sum}</h1>
    </div>
  );
};

export default Sum;
