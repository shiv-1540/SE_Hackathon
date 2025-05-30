import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';
import { courses } from '../data/mockData';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [filtersVisible, setFiltersVisible] = useState(false);
  
  const categories = ['Piano', 'Guitar', 'Theory', 'Composition', 'Voice', 'Percussion', 'Production'];
  const levels = ['beginner', 'intermediate', 'advanced', 'all-levels'];
  const prices = ['free', 'paid', 'all'];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = searchTerm === '' || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || 
      course.category.toLowerCase() === selectedCategory.toLowerCase() ||
      (course.subcategory && course.subcategory.toLowerCase() === selectedCategory.toLowerCase());
      
    const matchesLevel = selectedLevel === '' || course.level === selectedLevel;
    
    const matchesPrice = selectedPrice === '' || selectedPrice === 'all' ||
      (selectedPrice === 'free' && course.price === 0) ||
      (selectedPrice === 'paid' && course.price > 0);
      
    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  return (
    <div className="pt-24 md:pt-32">
      {/* Header Section */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-white/80 max-w-2xl">
            Discover a world of musical knowledge with our comprehensive collection of courses.
            From beginner to advanced, find the perfect course to enhance your skills.
          </p>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for courses..."
                className="input pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button 
              className="md:hidden btn btn-outline flex items-center justify-center"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              <Filter className="h-5 w-5 mr-2" />
              Filters
              <ChevronDown className={`h-4 w-4 ml-2 transition-transform ${filtersVisible ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="hidden md:flex gap-4">
              <div className="w-40">
                <select 
                  className="input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category.toLowerCase()}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-40">
                <select 
                  className="input"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-40">
                <select 
                  className="input"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  <option value="">All Prices</option>
                  {prices.map(price => (
                    <option key={price} value={price}>{price.charAt(0).toUpperCase() + price.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Mobile Filters */}
          {filtersVisible && (
            <div className="md:hidden mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="label">Category</label>
                <select 
                  className="input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category.toLowerCase()}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="label">Level</label>
                <select 
                  className="input"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level.charAt(0).toUpperCase() + level.slice(1)}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="label">Price</label>
                <select 
                  className="input"
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                >
                  <option value="">All Prices</option>
                  {prices.map(price => (
                    <option key={price} value={price}>{price.charAt(0).toUpperCase() + price.slice(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          
          {/* Results Summary */}
          <div className="mt-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing <span className="font-medium">{filteredCourses.length}</span> courses
            </p>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select className="input text-sm py-1">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl font-serif font-bold text-gray-600 mb-4">No courses found</p>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;