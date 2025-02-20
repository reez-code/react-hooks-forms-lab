import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value);
  }
  function onSubmit(newItem) {
    addItems(newItem);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && search === "") return true;

    return search
      ? item.name.toLowerCase().includes(search.toLowerCase())
      : selectedCategory === item.category;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onSubmit={onSubmit} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        search={search}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
