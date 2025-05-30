import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award } from 'lucide-react';
import { Course } from '../../types';

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, featured = false }) => {
  const {
    id,
    title,
    thumbnail,
    instructor,
    shortDescription,
    rating,
    ratingCount,
    duration,
    level,
    price,
    discountPrice,
    enrolledCount,
    certification
  } = course;

  return (
    <div 
      className={`card group transition-all duration-300 ${
        featured ? 'border-2 border-primary-600' : ''
      }`}
    >
      {featured && (
        <div className="absolute top-0 right-0 z-10 bg-primary-600 text-white py-1 px-3 text-xs font-semibold rounded-bl-lg">
          Featured
        </div>
      )}
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <Link 
              to={`/courses/${id}`}
              className="btn btn-primary w-full"
            >
              View Course
            </Link>
          </div>
        </div>
        <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium text-gray-800">
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-gray-500">({ratingCount} reviews)</span>
        </div>
        
        <Link to={`/courses/${id}`} className="block mb-2">
          <h3 className="font-serif font-bold text-lg line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{shortDescription}</p>
        
        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {duration}
          </div>
          <div className="flex items-center">
            <Users className="h-3.5 w-3.5 mr-1" />
            {enrolledCount.toLocaleString()} students
          </div>
          {certification && (
            <div className="flex items-center text-primary-600">
              <Award className="h-3.5 w-3.5 mr-1" />
              Certificate
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <img 
              src={instructor.profileImage} 
              alt={instructor.name} 
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs font-medium">{instructor.name}</span>
          </div>
          <div className="text-right">
            {discountPrice ? (
              <div className="flex flex-col">
                <span className="text-xs line-through text-gray-400">${price}</span>
                <span className="font-bold text-primary-600">${discountPrice}</span>
              </div>
            ) : (
              <span className="font-bold text-primary-600">
                {price === 0 ? 'Free' : `$${price}`}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;