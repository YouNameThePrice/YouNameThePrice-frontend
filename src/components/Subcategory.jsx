import React from "react";
import { useParams, Link } from "react-router-dom";
import categories from "../json/category.json";

function Subcategory() {
  const { category } = useParams();

  const categoryData = categories.find(
    (item) => item.name.toLowerCase() === category
  );

  if (!categoryData) {
    return null;
  }

  return (
    <div className="bg-light--gray border border-r-slate-400 w-[200px] px-2">
      <ul className="flex flex-col items-center justify-center space-y-4">
        {categoryData.subCategory.map((subcategory) => (
          <li
            key={subcategory.name}
            className="flex items-center justify-center py-2"
          >
            <Link
              to={`/${category.toLowerCase()}/${subcategory.name.toLowerCase()}`}
              className="text-center w-full"
            >
              <span className="flex items-center justify-center w-full">
                {subcategory.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subcategory;
