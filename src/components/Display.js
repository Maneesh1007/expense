//import { useState } from "react"

const Display = (props) => {
  const deleteHandler = async (itemName) => {
    const response = await fetch(
      `https://expense-tracker-bef01-default-rtdb.firebaseio.com/expenses/${itemName}.json`,
      {
        method: "DELETE",
      }
    );
    const updatedItems = props.items.filter((item) => item.name !== itemName);
    props.setItems(updatedItems);
  };
  const editHandler = async (itemName) => {
    const response = await fetch(
      `https://expense-tracker-bef01-default-rtdb.firebaseio.com/expenses/${itemName}.json`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      {props.items.map((item, index) => (
        <div key={index}>
          <h1>
            {item.amount} {item.desc} {item.category}
          </h1>
          <button onClick={() => editHandler(item.name)}>Edit</button>
          <button onClick={() => deleteHandler(item.name)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default Display;
