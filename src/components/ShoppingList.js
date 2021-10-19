import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemForm, setItemForm] = useState({
    category: "Produce",
    name: ""
  });

  function onSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onFormChange(e) {
    setItemForm({...itemForm, [e.target.name]: e.target.value})
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  }).filter((item) => {
    if (search === "") { return true; }
    else { return item.name.includes(search); }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} name={itemForm.name} category={itemForm.category} onFormChange={onFormChange}/>
      <Filter onCategoryChange={handleCategoryChange} search={search} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
