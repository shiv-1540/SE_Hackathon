import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Piano, 
  Music, 
  Mic, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Globe, 
  ArrowRight,
  Guitar,
  Music2,
  FileText,
  Drum
} from 'lucide-react';
import CourseCard from '../components/ui/CourseCard';
import CategoryCard from '../components/ui/CategoryCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import { courses } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 relative bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-56 w-56 rounded-full bg-primary-100 opacity-30 -top-10 -left-10"></div>
          <div className="absolute h-72 w-72 rounded-full bg-secondary-100 opacity-30 -bottom-10 -right-10"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h5 className="text-primary-600 font-medium mb-3">Master the Art and Science of Music</h5>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Elevate Your <span className="text-primary-600">Musical Journey</span> With Expert Guidance
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Discover interactive courses led by world-class instructors. Whether you're just starting or looking to perfect your craft, find your musical path with Harmonia.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/courses" className="btn btn-primary px-6 py-3">
                    Explore Courses
                  </Link>
                  <Link to="/community" className="btn btn-outline px-6 py-3">
                    Join Community
                  </Link>
                </div>
                
                <div className="mt-10 flex items-center space-x-8">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-600">300+</span>
                    <span className="text-sm text-gray-600">Courses</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-600">50K+</span>
                    <span className="text-sm text-gray-600">Students</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-600">100+</span>
                    <span className="text-sm text-gray-600">Instructors</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/7097467/pexels-photo-7097467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Music education" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">Featured</span>
                  <h3 className="text-white text-xl font-bold mb-2">Piano Masterclass: From Basics to Performance</h3>
                  <div className="flex items-center text-white/80">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    <span className="text-sm">Start your musical journey today</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
                <div className="bg-accent-600 rounded-full p-2">
                  <Music className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-sm font-medium">Live Sessions</p>
                  <p className="text-xs text-gray-500">With Expert Instructors</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex -space-x-2">
                    <img 
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      className="w-6 h-6 rounded-full border-2 border-white" 
                      alt="Student"
                    />
                    <img 
                      src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      className="w-6 h-6 rounded-full border-2 border-white" 
                      alt="Student"
                    />
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      className="w-6 h-6 rounded-full border-2 border-white" 
                      alt="Student"
                    />
                  </div>
                  <span className="text-xs text-gray-600">+2.5k joined this week</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-primary-600 h-1.5 rounded-full w-3/4"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Explore Music Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover courses in various musical disciplines, from instruments to theory and composition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard 
              title="Piano"
              icon={<Piano className="h-6 w-6 text-white" />}
              description="Master the keyboard with lessons for all skill levels."
              count={42}
              path="/courses?category=piano"
              color="bg-primary-600 text-white"
            />
            <CategoryCard 
              title="Guitar"
              icon={<Guitar className="h-6 w-6 text-white" />}
              description="From chords to advanced techniques for acoustic and electric."
              count={38}
              path="/courses?category=guitar"
              color="bg-secondary-500 text-white"
            />
            <CategoryCard 
              title="Music Theory"
              icon={<BookOpen className="h-6 w-6 text-gray-900" />}
              description="Build a strong foundation with comprehensive theory courses."
              count={24}
              path="/courses?category=theory"
              color="bg-accent-600 text-gray-900"
            />
            <CategoryCard 
              title="Composition"
              icon={<Music2 className="h-6 w-6 text-white" />}
              description="Learn to create your own music across different genres."
              count={18}
              path="/courses?category=composition"
              color="bg-error-600 text-white"
            />
            <CategoryCard 
              title="Voice"
              icon={<Mic className="h-6 w-6 text-white" />}
              description="Develop your singing with proper techniques and practices."
              count={15}
              path="/courses?category=voice"
              color="bg-success-600 text-white"
            />
            <CategoryCard 
              title="Percussion"
              icon={<Drum className="h-6 w-6 text-gray-900" />}
              description="Master rhythm with drums and percussion instruments."
              count={12}
              path="/courses?category=percussion"
              color="bg-warning-500 text-gray-900"
            />
            <CategoryCard 
              title="Production"
              icon={<FileText className="h-6 w-6 text-white" />}
              description="Learn music production, mixing, and sound engineering."
              count={20}
              path="/courses?category=production"
              color="bg-primary-800 text-white"
            />
            <div className="card group p-6 flex flex-col items-center justify-center text-center">
              <h3 className="font-serif font-bold text-xl mb-2 text-gray-600">
                Explore All Categories
              </h3>
              <Link 
                to="/courses" 
                className="mt-4 flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
              >
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Featured Courses
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Hand-picked courses recommended by our team and loved by students.
              </p>
            </div>
            <Link 
              to="/courses" 
              className="mt-4 md:mt-0 flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
            >
              View All Courses
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} featured={true} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Why Choose Harmonia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're more than just a learning platform. We're a community dedicated to your musical growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from world-class musicians and teachers with years of experience.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Music className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Engage with interactive exercises, quizzes, and practice tools.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Supportive Community</h3>
              <p className="text-gray-600">
                Connect with fellow musicians, share progress, and collaborate.
              </p>
            </div>
            
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-success-600" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-3">Learn Anywhere</h3>
              <p className="text-gray-600">
                Access your courses on any device, anytime, anywhere in the world.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-primary-50 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  Start Your Musical Journey Today
                </h3>
                <p className="text-gray-700 mb-6">
                  With our comprehensive courses, supportive community, and expert instructors, there's never been a better time to pursue your musical passion.
                </p>
                <Link to="/pricing" className="btn btn-primary">
                  View Plans & Pricing
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
                  <p className="text-gray-700">Courses available</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">50K+</div>
                  <p className="text-gray-700">Active students</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-accent-600 mb-2">100+</div>
                  <p className="text-gray-700">Expert instructors</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-success-600 mb-2">4.8/5</div>
                  <p className="text-gray-700">Average rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our students have achieved.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Emily Roberts"
              role="Piano Student"
              image="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              testimonial="I went from never touching a piano to playing my favorite songs in just 3 months. The step-by-step lessons and supportive community made all the difference."
              rating={5}
            />
            <TestimonialCard 
              name="David Kim"
              role="Guitar Enthusiast"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              testimonial="The advanced guitar techniques course took my playing to the next level. I'm now confident in my improvisation skills and have even started my own band."
              rating={5}
            />
            <TestimonialCard 
              name="Sofia Martinez"
              role="Music Producer"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              testimonial="The music theory and composition courses gave me the foundation I needed to create professional-quality tracks. My first EP is releasing next month!"
              rating={4}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Musical Journey?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join thousands of students learning and growing their musical skills every day.
              Start with a free account or explore our premium plans.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/courses" className="btn bg-white text-primary-600 hover:bg-gray-100 focus:ring-white px-8 py-3">
                Browse Courses
              </Link>
              <Link to="/pricing" className="btn border-2 border-white bg-transparent hover:bg-white/10 focus:ring-white px-8 py-3">
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;