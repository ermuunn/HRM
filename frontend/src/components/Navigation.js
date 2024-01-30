import React from "react";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByJobTitle }) {
  return (
    <div className="navigation">
      <div className="sort-button">
        <button onClick={handleSortByName}>Нэр</button>
        <button onClick={handleSortByJobTitle}>Ажил</button>
      </div>
      <form className="searchbar">
        <input
          value={searchTerm}
          onChange={onSearch}
          type="text"
          placeholder="Ажилтан хайх.."/>
      </form>
    </div>
  )
}

export default Navigation;