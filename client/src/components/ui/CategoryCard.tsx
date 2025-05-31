import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  count: number;
  path: string;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  description, 
  count, 
  path,
  color
}) => {
  return (
    <Link 
      to={path}
      className="card group h-full p-6 flex flex-col transition-all duration-300 hover:translate-y-[-5px]"
    >
      <div 
        className={`p-3 rounded-md w-12 h-12 flex items-center justify-center mb-4 ${color}`}
      >
        {icon}
      </div>
      
      <h3 className="font-serif font-bold text-xl mb-2 group-hover:text-primary-600 transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-sm text-gray-600 mb-4 flex-grow">
        {description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm font-medium text-gray-500">
          {count} courses
        </span>
        <div className="text-primary-600 transform transition-transform duration-300 group-hover:translate-x-1">
          <ChevronRight className="h-5 w-5" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;