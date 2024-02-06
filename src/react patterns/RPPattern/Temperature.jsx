import React from "react";
import Input from "./Input";

const Temperature = () => {
  return (
    <Input
      Kelvin={({ value }) => <div>{value}K</div>}
      Fahrenheit={({ value }) => <div>{value}°F</div>}
      Moumate10={({value}) => <div>{value} ! ველიუზე 10-ით მეტია</div>}
    />
  );
};

export default Temperature;
