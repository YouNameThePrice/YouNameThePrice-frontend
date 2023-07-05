import React from "react";
import categories from "../json/category.json";
import { Link } from "react-router-dom";

function MainCategory() {
  return (
    <div className="bg-light--gray border-b border-b-slate-400 py-4 w-screen h-auto">
      <ul className="flex flex-wrap lg:flex-nowrap md:justify-between md:px-3 lg:px-0 lg:justify-center gap-3 sm:space-x-3 lg:space-x-10 2xl:space-x-20">
        {categories.map((category) => (
          <li key={category.name}>
            <Link to={`/${category.name.toLocaleLowerCase()}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainCategory;
