import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Mock data directly in the component
  const featuredCourses = [
    {
      id: 1,
      title: "Piano Fundamentals",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      instructor: { name: "John Smith", profileImage: "https://randomuser.me/api/portraits/men/1.jpg" },
      rating: 4.8,
      ratingCount: 125,
      duration: "8 weeks",
      price: 99,
      featured: true
    },
    {
      id: 2,
      title: "Guitar Mastery",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      instructor: { name: "Sarah Johnson", profileImage: "https://randomuser.me/api/portraits/women/1.jpg" },
      rating: 4.9,
      ratingCount: 210,
      duration: "10 weeks",
      price: 129,
      featured: true
    },
    {
      id: 3,
      title: "Music Theory Basics",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
      instructor: { name: "Michael Brown", profileImage: "https://randomuser.me/api/portraits/men/2.jpg" },
      rating: 4.7,
      ratingCount: 95,
      duration: "6 weeks",
      price: 79,
      featured: true
    }
  ];

  const categories = [
    { name: "Piano", icon: "🎹", count: 42 },
    { name: "Guitar", icon: "🎸", count: 38 },
    { name: "Music Theory", icon: "🎼", count: 24 },
    { name: "Voice", icon: "🎤", count: 15 }
  ];

  const testimonials = [
    {
      name: "Emily Roberts",
      role: "Piano Student",
      quote: "I went from never touching a piano to playing my favorite songs in just 3 months."
    },
    {
      name: "David Kim",
      role: "Guitar Enthusiast",
      quote: "The courses took my playing to the next level. I've even started my own band!"
    }
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Elevate Your <span className="text-blue-600">Musical Journey</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover interactive courses led by world-class instructors.
              </p>
              <div className="flex gap-4">
                <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                  Explore Courses
                </Link>
              
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4" 
                alt="Music education" 
                className="rounded-lg shadow-xl w-70"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-2">
                    <img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                    <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="Student" />
                  </div>
                  <span className="text-sm">1,000+ students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Music Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover courses in various musical disciplines
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} courses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Link to="/courses" className="text-blue-600 hover:underline">
              View All Courses
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-gray-600 ml-2">({course.ratingCount})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <img src={course.instructor.profileImage} alt={course.instructor.name} className="w-8 h-8 rounded-full mr-2" />
                      <span>{course.instructor.name}</span>
                    </div>
                    <span className="font-bold">${course.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👤</span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your musical journey today with our comprehensive courses
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold">
              Browse Courses
            </Link>
            <Link to="/pricing" className="border-2 border-white px-8 py-3 rounded-lg font-bold">
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;