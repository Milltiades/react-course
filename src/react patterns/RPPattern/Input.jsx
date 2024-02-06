import React, { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {props.Kelvin({ value: value + 273.15 })}
      {props.Fahrenheit({ value: (value * 9) / 5 + 32 })}
      {props.Moumate10({ value:  value / 1 + 10  })}
    </>
  );
};

export default Input;
