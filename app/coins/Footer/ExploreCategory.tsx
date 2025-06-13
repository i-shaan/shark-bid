import React from 'react';
import { Category } from '@/app/types/types';

interface CategoryTagsProps {
  categories: Category[];
}

const CategoryTags: React.FC<CategoryTagsProps> = ({ categories }) => {
  return (
    <div className="flex flex-col justify-center my-10 text-center">
      <h2 className="text-xl font-medium text-white mb-6 text-center">
        Explore Popular Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <a
            key={category.id}
            href="#"
            className="inline-flex px-4 py-2 border border-[#bbbbbb4d] hover:bg-gray-700 text-[#bbbbbb] hover:text-white rounded-full text-sm transition-colors whitespace-nowrap"
          >
            {category.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategoryTags;
