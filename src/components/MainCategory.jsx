import React from "react";
import categories from "../json/category.json";
import { Link } from "react-router-dom";

function MainCategory() {
  return (
    <div className="bg-light--gray border-b border-b-slate-400 py-4">
      <ul className="flex justify-center space-x-20">
        {categories.map((category) => (
          <li key={category.name}><Link to={`/${category.name.toLocaleLowerCase()}`}>{category.name}</Link></li>
        ))}
        
      </ul>
    </div>
  );
}

export default MainCategory;
