import { useRef, useState } from "react";
import Display from "./Display";

const ExpenseTracker = () => {
  const [items, setItems] = useState([]);
  const amountRef = useRef("");
  const descRef = useRef("");
  const categoryRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://expense-tracker-bef01-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify({
          amount: amountRef.current.value,
          desc: descRef.current.value,
          category: categoryRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    const Expense = {
      amount: amountRef.current.value,
      desc: descRef.current.value,
      category: categoryRef.current.value,
      name: data.name,
    };
    await setItems((previtems) => [...previtems, Expense]);
    console.log(items);
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={submitHandler}>
        <label>Amount</label>
        <input type="number" ref={amountRef} required />
        <label>Description</label>
        <input type="text" ref={descRef} required />
        <select ref={categoryRef}>
          <option value="Food">Food</option>
          <option value="Petrol">Petrol</option>
          <option value="Salary">Salary</option>
        </select>
        <button>Add Expense</button>
      </form>
      {items.length > 0 && <Display items={items} setItems={setItems} />}
    </div>
  );
};

export default ExpenseTracker;
