//import { useState } from "react"

const Display = (props) => {
  return (
    <div>
      {props.items.map((item, index) => (
        <div key={index}>
          <h1>
            {item.amount} {item.desc} {item.category}
          </h1>
        </div>
      ))}
    </div>
  );
};
export default Display;
