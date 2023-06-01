import React from 'react';
import { useParams, Link } from 'react-router-dom';
import categories from '../json/category.json';

function Subcategory() {
  const { category } = useParams();

  const categoryData = categories.find((item) => item.name.toLowerCase() === category);

  if (!categoryData) {
    return null;
  }

  return (
    <ul className='flex flex-col items-center justify-center space-y-4'>
      {categoryData.subCategory.map((subcategory) => (
        <li key={subcategory.name} className='items-center'>
          <Link to={`/${category.toLowerCase()}/${subcategory.name.toLowerCase()}`}>
            {subcategory.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Subcategory;