import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Users, 
  Award, 
  Calendar, 
  Play, 
  FileText, 
  Download, 
  ChevronDown, 
  Share2, 
  Heart,
  CheckCircle,
  Lock
} from 'lucide-react';
import { courses } from '../data/mockData';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="pt-24 md:pt-32 pb-16 text-center">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="btn btn-primary">
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }
  
  const toggleSection = (index: number) => {
    setExpandedSections(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const groupedLessons = course.lessons.reduce((acc, lesson, index) => {
    // Group lessons into sections of 4-6 lessons
    const sectionIndex = Math.floor(index / 4);
    if (!acc[sectionIndex]) {
      acc[sectionIndex] = [];
    }
    acc[sectionIndex].push(lesson);
    return acc;
  }, {} as Record<number, typeof course.lessons>);

  return (
    <div className="pt-24 md:pt-32 pb-16">
      {/* Course Header */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="mb-4 flex items-center">
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  {course.category}
                </span>
                {course.subcategory && (
                  <span className="ml-2 text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {course.subcategory}
                  </span>
                )}
                <span className="ml-auto flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                  <span className="text-sm ml-1">({course.ratingCount} reviews)</span>
                </span>
              </div>
              
              <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-white/80 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.lessonsCount} lessons</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">{course.enrolledCount.toLocaleString()} students</span>
                </div>
                {course.certification && (
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span className="text-sm">Certificate</span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <img 
                  src={course.instructor.profileImage} 
                  alt={course.instructor.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-medium">Created by <span className="font-semibold">{course.instructor.name}</span></p>
                  <p className="text-sm text-white/70">Expert Instructor</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-white text-gray-900 rounded-lg shadow-lg p-6">
              <div className="mb-6 aspect-video rounded-md overflow-hidden relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button className="bg-white/90 rounded-full p-3 hover:bg-white transition-colors duration-200">
                    <Play className="h-8 w-8 text-primary-600 fill-primary-600" />
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                  <Heart className="h-5 w-5 text-gray-500 hover:text-error-500 transition-colors duration-200" />
                </div>
              </div>
              
              <div className="flex items-baseline mb-4">
                {course.discountPrice ? (
                  <>
                    <span className="text-3xl font-bold text-gray-900">${course.discountPrice}</span>
                    <span className="ml-2 text-lg line-through text-gray-500">${course.price}</span>
                    <span className="ml-2 text-sm bg-success-100 text-success-700 px-2 py-0.5 rounded">
                      {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    {course.price === 0 ? 'Free' : `$${course.price}`}
                  </span>
                )}
              </div>
              
              <button className="btn btn-primary w-full mb-3 py-3">
                Enroll Now
              </button>
              <button className="btn btn-outline w-full mb-6 py-3">
                Try Free Preview
              </button>
              
              <div className="text-sm text-gray-600 space-y-3">
                <p className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                  <span>Full lifetime access</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                  <span>Access on mobile and desktop</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                  <span>Certificate of completion</span>
                </p>
                <p className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                  <span>Downloadable resources</span>
                </p>
              </div>
              
              <div className="flex justify-center mt-6">
                <button className="text-sm text-gray-600 flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </button>
                <button className="text-sm text-gray-600 flex items-center hover:text-primary-600 transition-colors duration-200">
                  <FileText className="h-4 w-4 mr-1" />
                  Gift
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex -mb-px space-x-8">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`py-4 border-b-2 font-medium text-sm ${
                      activeTab === 'overview'
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('curriculum')}
                    className={`py-4 border-b-2 font-medium text-sm ${
                      activeTab === 'curriculum'
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => setActiveTab('instructor')}
                    className={`py-4 border-b-2 font-medium text-sm ${
                      activeTab === 'instructor'
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Instructor
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`py-4 border-b-2 font-medium text-sm ${
                      activeTab === 'reviews'
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Reviews
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div>
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl font-bold mb-4">What You'll Learn</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {course.requirements && course.requirements.length > 0 && (
                    <div className="mb-8">
                      <h2 className="font-serif text-2xl font-bold mb-4">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {course.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {course.description && (
                    <div className="mb-8">
                      <h2 className="font-serif text-2xl font-bold mb-4">Description</h2>
                      <div className="prose max-w-none">
                        <p>{course.description}</p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-4">This Course Includes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Clock className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <p className="font-medium">{course.duration}</p>
                          <p className="text-sm text-gray-500">Duration</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Play className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <p className="font-medium">{course.lessonsCount} lessons</p>
                          <p className="text-sm text-gray-500">Video Content</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Download className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <p className="font-medium">Downloadable Resources</p>
                          <p className="text-sm text-gray-500">Sheet Music & Practice Files</p>
                        </div>
                      </div>
                      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                        <Award className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <p className="font-medium">Certificate</p>
                          <p className="text-sm text-gray-500">On Completion</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'curriculum' && (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-serif text-2xl font-bold">Course Curriculum</h2>
                    <div className="text-sm text-gray-600">
                      {course.lessonsCount} lessons • {course.duration}
                    </div>
                  </div>
                  
                  {Object.entries(groupedLessons).map(([sectionIndex, lessons], index) => {
                    const isExpanded = expandedSections[index] !== false; // Default to expanded
                    return (
                      <div key={sectionIndex} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          className="w-full flex justify-between items-center p-4 bg-gray-50 text-left font-medium"
                          onClick={() => toggleSection(index)}
                        >
                          <span>Section {parseInt(sectionIndex) + 1}: {course.category} Fundamentals</span>
                          <ChevronDown className={`h-5 w-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {isExpanded && (
                          <div className="divide-y divide-gray-200">
                            {lessons.map((lesson) => (
                              <div key={lesson.id} className="p-4 flex justify-between items-center">
                                <div className="flex items-start">
                                  <div className="mr-3 mt-1">
                                    {lesson.free ? (
                                      <Play className="h-5 w-5 text-primary-600" />
                                    ) : (
                                      <Lock className="h-5 w-5 text-gray-400" />
                                    )}
                                  </div>
                                  <div>
                                    <h3 className="font-medium">{lesson.title}</h3>
                                    <p className="text-sm text-gray-500">{lesson.description}</p>
                                    
                                    {lesson.resources && lesson.resources.length > 0 && (
                                      <div className="mt-2 flex items-center text-sm text-primary-600">
                                        <FileText className="h-4 w-4 mr-1" />
                                        <span>{lesson.resources.length} resources</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="text-sm text-gray-500 whitespace-nowrap ml-4">
                                  {lesson.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
              
              {activeTab === 'instructor' && (
                <div>
                  <div className="flex items-start">
                    <img 
                      src={course.instructor.profileImage} 
                      alt={course.instructor.name}
                      className="w-24 h-24 rounded-full object-cover mr-6"
                    />
                    <div>
                      <h2 className="font-serif text-2xl font-bold mb-2">{course.instructor.name}</h2>
                      <p className="text-gray-600 mb-4">Expert {course.category} Instructor</p>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="font-medium">4.9</span>
                          <span className="text-sm text-gray-500 ml-1">(120 reviews)</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-gray-600 mr-1" />
                          <span>3,500+ students</span>
                        </div>
                        <div className="flex items-center">
                          <Play className="h-5 w-5 text-gray-600 mr-1" />
                          <span>12 courses</span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
                        aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                        Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                        nisl nunc quis nisl.
                      </p>
                      <p className="text-gray-700">
                        Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                        nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                        nunc, quis aliquam nisl nunc quis nisl.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="md:w-1/3 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-5xl font-bold text-primary-600 mb-2">{course.rating}</div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${
                              i < Math.floor(course.rating) 
                                ? 'text-yellow-500 fill-yellow-500' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">Course Rating • {course.ratingCount} Reviews</p>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="font-medium mb-4">Rating Distribution</h3>
                      {[5, 4, 3, 2, 1].map(stars => {
                        // Calculate percentage based on a mock distribution
                        const percentage = stars === 5 ? 70 : 
                                          stars === 4 ? 20 : 
                                          stars === 3 ? 7 : 
                                          stars === 2 ? 2 : 1;
                        
                        return (
                          <div key={stars} className="flex items-center mb-2">
                            <div className="flex items-center w-20">
                              <span className="mr-2">{stars}</span>
                              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                              <div 
                                className="bg-yellow-500 h-2.5 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-500 w-12">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-4">Reviews</h3>
                    <div className="space-y-6">
                      {/* Mock reviews */}
                      {[1, 2, 3].map(i => (
                        <div key={i} className="border-b border-gray-100 pb-6">
                          <div className="flex items-start">
                            <img 
                              src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                              alt="Reviewer" 
                              className="w-10 h-10 rounded-full object-cover mr-4"
                            />
                            <div>
                              <div className="flex items-center mb-1">
                                <h4 className="font-medium mr-2">Student {i}</h4>
                                <span className="text-xs text-gray-500">3 weeks ago</span>
                              </div>
                              <div className="flex mb-2">
                                {[...Array(5)].map((_, j) => (
                                  <Star 
                                    key={j} 
                                    className={`h-4 w-4 ${
                                      j < 5 - (i % 2) 
                                        ? 'text-yellow-500 fill-yellow-500' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <p className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
                                nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl 
                                nunc quis nisl. Great course, learned a lot!
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button className="btn btn-outline">Load More Reviews</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <div className="card p-6 mb-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Related Courses</h3>
                  <div className="space-y-4">
                    {courses
                      .filter(c => 
                        c.id !== course.id && 
                        (c.category === course.category || c.subcategory === course.subcategory)
                      )
                      .slice(0, 3)
                      .map(relatedCourse => (
                        <Link 
                          key={relatedCourse.id} 
                          to={`/courses/${relatedCourse.id}`}
                          className="flex group"
                        >
                          <div className="w-20 h-14 rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={relatedCourse.thumbnail} 
                              alt={relatedCourse.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="ml-3 flex-grow">
                            <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
                              {relatedCourse.title}
                            </h4>
                            <div className="flex items-center mt-1">
                              <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                              <span className="text-xs ml-1">{relatedCourse.rating}</span>
                              <span className="text-xs text-gray-500 ml-auto">
                                {relatedCourse.price === 0 ? 'Free' : `$${relatedCourse.price}`}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))
                    }
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="font-serif text-xl font-bold mb-4">Course Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <Link 
                        key={tag} 
                        to={`/courses?tag=${tag}`}
                        className="bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetailPage;