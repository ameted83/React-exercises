import React from "react";

const Sum = ({ numbers = [1, 2, 3, 7] }) => {
  const sum = numbers.reduce((result, number) => result + number, 0);
  return (
    <div>
      <h1>The sum is: {sum}</h1>
    </div>
  );
};

export default Sum;
