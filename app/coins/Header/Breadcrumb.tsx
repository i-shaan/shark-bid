import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className="flex items-center text-sm text-gray-400 my-8">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className={index === items.length - 1 ? 'text-gray-300' : ''}>
            {item}
          </span>
          {index < items.length - 1 && (
            <ChevronRight className="h-4 w-4 mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;