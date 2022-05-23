import React, { useEffect, useRef } from "react";

const CarDetails = ({ initialData }) => {
  const formRef = useRef(null);

  useEffect(() => {
    formRef.current.reset();
  }, [initialData]);

  return (
    <div>
      <form ref={formRef}>
        <input name="model" defaultValue={initialData.model}></input>
        <input name="year" defaultValue={initialData.year}></input>
        <input name="color" defaultValue={initialData.color}></input>
        <button type="submit">Invio</button>
      </form>
    </div>
  );
};

export default CarDetails;
