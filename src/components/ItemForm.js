import React from "react";

function ItemForm({ onItemFormSubmit, name, category, onFormChange}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={onFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={onFormChange}>
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
