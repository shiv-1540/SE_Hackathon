import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  List, 
  PlayCircle, 
  FileText, 
  MessageSquare, 
  Download, 
  ThumbsUp, 
  ThumbsDown, 
  Share2,
  BookOpen,
  CheckCircle
} from 'lucide-react';
import { courses } from '../data/mockData';

const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('content');
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
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
  
  const lesson = course.lessons.find(l => l.id === lessonId);
  if (!lesson) {
    return (
      <div className="pt-24 md:pt-32 pb-16 text-center">
        <div className="container-custom">
          <h1 className="font-serif text-3xl font-bold mb-4">Lesson Not Found</h1>
          <p className="text-gray-600 mb-6">The lesson you're looking for doesn't exist or has been removed.</p>
          <Link to={`/courses/${courseId}`} className="btn btn-primary">
            Back to Course
          </Link>
        </div>
      </div>
    );
  }
  
  const currentLessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  const prevLesson = currentLessonIndex > 0 ? course.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < course.lessons.length - 1 ? course.lessons[currentLessonIndex + 1] : null;
  
  const toggleLessonCompletion = (id: string) => {
    setCompletedLessons(prev => 
      prev.includes(id) 
        ? prev.filter(lessonId => lessonId !== id)
        : [...prev, id]
    );
  };
  
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 z-30 w-80 bg-white border-r transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:relative lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b flex items-center justify-between">
            <Link to={`/courses/${courseId}`} className="flex items-center text-gray-800 hover:text-primary-600 transition-colors duration-200">
              <ChevronLeft className="h-5 w-5 mr-1" />
              <span className="font-medium">Back to Course</span>
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-4 bg-gray-50 border-b">
            <h2 className="font-medium text-gray-900 mb-1 line-clamp-2">{course.title}</h2>
            <div className="flex items-center text-sm text-gray-500">
              <span>{course.lessonsCount} lessons</span>
              <span className="mx-2">•</span>
              <span>{course.duration}</span>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            <nav className="p-4">
              <h3 className="font-medium text-gray-800 mb-3">Course Content</h3>
              <ul className="space-y-1">
                {course.lessons.map((l, index) => (
                  <li key={l.id}>
                    <Link 
                      to={`/courses/${courseId}/lessons/${l.id}`}
                      className={`flex items-center p-2 rounded-md ${
                        l.id === lessonId
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-center w-6 h-6 mr-3">
                        {completedLessons.includes(l.id) ? (
                          <CheckCircle className="h-5 w-5 text-success-500" />
                        ) : (
                          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200 text-xs font-medium">
                            {index + 1}
                          </div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-sm line-clamp-1">{l.title}</div>
                        <div className="flex items-center text-xs text-gray-500">
                          <PlayCircle className="h-3 w-3 mr-1" />
                          <span>{l.duration}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="p-4 border-t bg-gray-50">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center text-gray-600">
                <BookOpen className="h-4 w-4 mr-1" />
                <span>Your Progress</span>
              </div>
              <div className="font-medium text-primary-600">
                {completedLessons.length}/{course.lessons.length} lessons
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div 
                className="bg-primary-600 h-1.5 rounded-full" 
                style={{ width: `${(completedLessons.length / course.lessons.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden bg-white">
        {/* Top Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-600 hover:text-gray-900"
            >
              <List className="h-6 w-6" />
            </button>
            
            <div className="flex items-center">
              <button 
                onClick={() => toggleLessonCompletion(lesson.id)}
                className={`mr-4 flex items-center text-sm font-medium ${
                  completedLessons.includes(lesson.id)
                    ? 'text-success-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                <CheckCircle className={`h-5 w-5 mr-1 ${
                  completedLessons.includes(lesson.id) ? 'fill-success-100' : ''
                }`} />
                <span>{completedLessons.includes(lesson.id) ? 'Completed' : 'Mark as Complete'}</span>
              </button>
              
              <div className="flex items-center text-gray-600">
                <Link 
                  to={prevLesson ? `/courses/${courseId}/lessons/${prevLesson.id}` : `#`}
                  className={`p-2 ${prevLesson ? 'hover:text-primary-600' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <span className="text-sm mx-2">
                  Lesson {currentLessonIndex + 1} of {course.lessons.length}
                </span>
                <Link 
                  to={nextLesson ? `/courses/${courseId}/lessons/${nextLesson.id}` : `#`}
                  className={`p-2 ${nextLesson ? 'hover:text-primary-600' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lesson Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-screen-xl mx-auto px-4 py-6">
            <div className="mb-6">
              <h1 className="font-serif text-2xl font-bold mb-2">{lesson.title}</h1>
              <p className="text-gray-600">{lesson.description}</p>
            </div>
            
            {/* Video Player */}
            <div className="bg-gray-900 aspect-video rounded-lg overflow-hidden mb-6 flex items-center justify-center">
              {lesson.videoUrl ? (
                <div className="w-full h-full">
                  {/* Placeholder for actual video player */}
                  <div className="w-full h-full flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-white opacity-80" />
                  </div>
                </div>
              ) : (
                <div className="text-white text-center p-8">
                  <PlayCircle className="h-16 w-16 mx-auto mb-4 opacity-60" />
                  <p>Video not available in preview mode</p>
                </div>
              )}
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex -mb-px space-x-8">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`py-4 border-b-2 font-medium text-sm ${
                    activeTab === 'content'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Lesson Content
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`py-4 border-b-2 font-medium text-sm ${
                    activeTab === 'resources'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Resources
                </button>
                <button
                  onClick={() => setActiveTab('discussion')}
                  className={`py-4 border-b-2 font-medium text-sm ${
                    activeTab === 'discussion'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Discussion
                </button>
              </nav>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'content' && (
              <div className="prose max-w-none">
                <h2>Lesson Overview</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, 
                  nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, 
                  nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                </p>
                
                <h2>Key Concepts</h2>
                <ul>
                  <li>Understanding the fundamental principles of this lesson</li>
                  <li>How to apply the techniques in your practice</li>
                  <li>Common mistakes to avoid and how to correct them</li>
                  <li>Building on previous knowledge to advance your skills</li>
                </ul>
                
                <h2>Practice Exercise</h2>
                <p>
                  To solidify your understanding, try the following exercise:
                </p>
                <ol>
                  <li>Set aside 20 minutes of uninterrupted practice time</li>
                  <li>Follow the demonstration from the video</li>
                  <li>Start slowly and gradually increase speed as you become comfortable</li>
                  <li>Record yourself and compare with the reference examples</li>
                </ol>
                
                {lesson.sheetMusic && (
                  <>
                    <h2>Sheet Music</h2>
                    <div className="border rounded-lg p-4 bg-gray-50 flex items-center justify-between">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 text-primary-600 mr-3" />
                        <div>
                          <p className="font-medium text-gray-900">Lesson Sheet Music</p>
                          <p className="text-sm text-gray-500">PDF • 2.4 MB</p>
                        </div>
                      </div>
                      <a 
                        href={lesson.sheetMusic} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline text-sm py-1"
                      >
                        View Sheet Music
                      </a>
                    </div>
                  </>
                )}
                
                <h2>Additional Notes</h2>
                <p>
                  Remember that consistent practice is key to improvement. Even 15-20 minutes of focused practice
                  each day is more beneficial than several hours once a week. If you encounter difficulties,
                  revisit the video demonstration or ask questions in the discussion section.
                </p>
              </div>
            )}
            
            {activeTab === 'resources' && (
              <div>
                <h2 className="font-serif text-xl font-bold mb-4">Downloadable Resources</h2>
                
                {lesson.resources && lesson.resources.length > 0 ? (
                  <div className="space-y-4">
                    {lesson.resources.map(resource => (
                      <div key={resource.id} className="border rounded-lg p-4 flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center mr-3">
                            {resource.type === 'pdf' && <FileText className="h-5 w-5 text-primary-600" />}
                            {resource.type === 'audio' && <PlayCircle className="h-5 w-5 text-primary-600" />}
                            {resource.type === 'video' && <PlayCircle className="h-5 w-5 text-primary-600" />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{resource.title}</p>
                            <p className="text-sm text-gray-500 capitalize">{resource.type}</p>
                          </div>
                        </div>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline text-sm flex items-center"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </a>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-40" />
                    <p>No downloadable resources available for this lesson.</p>
                  </div>
                )}
                
                <div className="mt-8">
                  <h2 className="font-serif text-xl font-bold mb-4">Recommended Additional Resources</h2>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Supplementary Reading</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>"Mastering Music Theory" by John Smith</li>
                        <li>"The Complete Guide to Piano Technique" by Sarah Johnson</li>
                        <li>Music Theory Online - <a href="#" className="text-primary-600 hover:underline">www.musictheory.net</a></li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Practice Tools</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Metronome App - helps maintain consistent tempo</li>
                        <li>Audio Recording App - for self-assessment</li>
                        <li>Sheet Music Scanner - digitize printed music</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'discussion' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl font-bold">Lesson Discussion</h2>
                  <button className="btn btn-primary text-sm">Ask a Question</button>
                </div>
                
                <div className="space-y-6">
                  <div className="border rounded-lg p-4">
                    <textarea 
                      placeholder="Share your thoughts or ask a question about this lesson..."
                      className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      rows={3}
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <button className="btn btn-primary text-sm">Post Comment</button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Sample comments */}
                    <div className="border-b pb-6">
                      <div className="flex items-start">
                        <img 
                          src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="User" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium">Michael Brown</h4>
                            <span className="text-xs text-gray-500 ml-2">2 days ago</span>
                          </div>
                          <p className="text-gray-800 mb-3">
                            I'm having trouble with the fingering at 3:42 in the video. Does anyone have any tips on how to make this transition smoother?
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <button className="flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>12</span>
                            </button>
                            <button className="flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              <span>2</span>
                            </button>
                            <button className="flex items-center hover:text-primary-600 transition-colors duration-200">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>Reply</span>
                            </button>
                          </div>
                          
                          {/* Reply */}
                          <div className="mt-4 ml-8 pt-4 border-t">
                            <div className="flex items-start">
                              <img 
                                src={course.instructor.profileImage} 
                                alt={course.instructor.name} 
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div>
                                <div className="flex items-center mb-1">
                                  <h4 className="font-medium">{course.instructor.name}</h4>
                                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded ml-2">Instructor</span>
                                  <span className="text-xs text-gray-500 ml-2">1 day ago</span>
                                </div>
                                <p className="text-gray-800 mb-3">
                                  Great question, Michael! Try practicing this section slowly and focus on maintaining a relaxed hand position. I've uploaded an additional practice exercise in the resources section that should help with this specific transition.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                  <button className="flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                                    <ThumbsUp className="h-4 w-4 mr-1" />
                                    <span>8</span>
                                  </button>
                                  <button className="flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                                    <ThumbsDown className="h-4 w-4 mr-1" />
                                    <span>0</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-b pb-6">
                      <div className="flex items-start">
                        <img 
                          src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="User" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <div className="flex items-center mb-1">
                            <h4 className="font-medium">Emma Wilson</h4>
                            <span className="text-xs text-gray-500 ml-2">5 days ago</span>
                          </div>
                          <p className="text-gray-800 mb-3">
                            This lesson was incredibly helpful! I've been struggling with this concept for weeks, and your explanation finally made it click for me. Thank you!
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <button className="flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>24</span>
                            </button>
                            <button className="flex items-center hover:text-primary-600 transition-colors duration-200 mr-4">
                              <ThumbsDown className="h-4 w-4 mr-1" />
                              <span>0</span>
                            </button>
                            <button className="flex items-center hover:text-primary-600 transition-colors duration-200">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>Reply</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button className="btn btn-outline">Load More Comments</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="bg-white border-t p-4">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <button className="text-gray-600 hover:text-primary-600 transition-colors duration-200 mr-4">
                <Share2 className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-2">
                <button className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <ThumbsUp className="h-5 w-5" />
                </button>
                <button className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                  <ThumbsDown className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {prevLesson && (
                <Link 
                  to={`/courses/${courseId}/lessons/${prevLesson.id}`}
                  className="btn btn-outline text-sm py-2"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Link>
              )}
              
              {nextLesson && (
                <Link 
                  to={`/courses/${courseId}/lessons/${nextLesson.id}`}
                  className="btn btn-primary text-sm py-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              )}
              
              {!nextLesson && (
                <Link 
                  to={`/courses/${courseId}`}
                  className="btn btn-primary text-sm py-2"
                >
                  Complete Course
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;