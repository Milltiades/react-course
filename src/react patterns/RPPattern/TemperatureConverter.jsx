import React, { useState } from "react";

export function renderKelvin(props) {
  return <h2>{props.value}K</h2>;
}
export function renderFahrenheit(props) {
  return <h2>{props.value}°F</h2>;
}

const TemperatureConverter = () => {
  return (
    <TemperatureForm
      renderKelvin={renderKelvin}
      renderFahrenheit={renderFahrenheit}
    />
  );
};

export default TemperatureConverter;

const TemperatureForm = (props) => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setValue(parseInt(e.target.value))}
        value={value}
      />

      {props.renderKelvin({ value: Math.floor(value + 273.15) })}
      {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })}
    </div>
  );
};

// const TemperatureConverter = (props) => {
//     const [value, setValue] = useState(0)
//   return (
//     <div>
//         <input type="number"
//         placeholder='Degrees Celsius'
//         onChange={(e) => {
//             setValue(parseInt(e.target.value))
//         }}
//         />
//         {/* {props.renderKelvin({ value: Math.floor(value + 273.15) })}
//         {props.renderFahrenheit({ value: Math.floor((value * 9) / 5 + 32) })} */}
//     </div>
//   )
// }

// export default TemperatureConverter
