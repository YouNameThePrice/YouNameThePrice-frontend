import React from "react";
import category from "../json/category.json";

function MainCategory() {
  return (
    <div className="bg-light--gray border-b border-b-slate-400 py-4">
      <ul className="flex justify-center space-x-20">
        {category.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainCategory;
