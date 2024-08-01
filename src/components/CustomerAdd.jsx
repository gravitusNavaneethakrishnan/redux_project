import React, { useState } from "react";
//files
import { addCustomer as addCustomerAction } from "../redux/slices/customerSlice";
//redux
import { useDispatch } from "react-redux";

export default function CustomerAdd() {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  function addCustomer() {
    if (input) {
      dispatch(addCustomerAction(input));
      setInput('');
    }
  }

  return (
    <>
      <div>
        <h3>Add New Customer</h3>
        <input required type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addCustomer}>Add</button>
      </div>
    </>
  );
}