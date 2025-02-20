import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: "Produce",
  });
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ ...formData, id: uuid() });
    setFormData({
      id: "",
      name: "",
      category: "Produce",
    });
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
