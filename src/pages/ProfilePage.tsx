import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Settings, 
  BookOpen, 
  Award, 
  Bell, 
  CreditCard, 
  LogOut,
  Clock,
  ChevronRight,
  Edit3,
  Upload,
  Check
} from 'lucide-react';
import { currentUser, courses } from '../data/mockData';

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Get courses the user is enrolled in
  const inProgressCourses = currentUser.inProgressCourses?.map(enrollment => {
    const course = courses.find(c => c.id === enrollment.courseId);
    return { ...course, progress: enrollment.progress };
  }).filter(Boolean) || [];
  
  const completedCourses = currentUser.completedCourses?.map(courseId => {
    return courses.find(c => c.id === courseId);
  }).filter(Boolean) || [];
  
  return (
    <div className="pt-24 md:pt-32 pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6 border-b text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <img 
                    src={currentUser.profileImage} 
                    alt={currentUser.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                  <button className="absolute bottom-0 right-0 bg-primary-600 text-white p-1.5 rounded-full hover:bg-primary-700 transition-colors duration-200">
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="font-serif text-xl font-bold mb-1">{currentUser.name}</h2>
                <p className="text-gray-600 mb-3">{currentUser.email}</p>
                <div className="bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full inline-block">
                  {currentUser.subscriptionTier?.charAt(0).toUpperCase() + currentUser.subscriptionTier?.slice(1)} Plan
                </div>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('dashboard')}
                      className={`w-full flex items-center p-3 rounded-md ${
                        activeTab === 'dashboard'
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <User className="h-5 w-5 mr-3" />
                      <span>Dashboard</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('courses')}
                      className={`w-full flex items-center p-3 rounded-md ${
                        activeTab === 'courses'
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <BookOpen className="h-5 w-5 mr-3" />
                      <span>My Courses</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('achievements')}
                      className={`w-full flex items-center p-3 rounded-md ${
                        activeTab === 'achievements'
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <Award className="h-5 w-5 mr-3" />
                      <span>Achievements</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('notifications')}
                      className={`w-full flex items-center p-3 rounded-md ${
                        activeTab === 'notifications'
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <Bell className="h-5 w-5 mr-3" />
                      <span>Notifications</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('subscription')}
                      className={`w-full flex items-center p-3 rounded-md ${
                        activeTab === 'subscription'
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <CreditCard className="h-5 w-5 mr-3" />
                      <span>Subscription</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full flex items-center p-3 rounded-md ${
                        activeTab === 'settings'
                          ? 'bg-primary-50 text-primary-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <Settings className="h-5 w-5 mr-3" />
                      <span>Settings</span>
                    </button>
                  </li>
                </ul>
                
                <div className="pt-4 mt-6 border-t">
                  <button className="w-full flex items-center p-3 rounded-md text-gray-700 hover:bg-gray-50">
                    <LogOut className="h-5 w-5 mr-3" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div>
                <h1 className="font-serif text-2xl font-bold mb-6">Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-primary-100 p-3 rounded-full mr-4">
                        <BookOpen className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{inProgressCourses.length}</h3>
                        <p className="text-gray-600">Courses in Progress</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full mr-4">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{completedCourses.length}</h3>
                        <p className="text-gray-600">Completed Courses</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex items-center">
                      <div className="bg-yellow-100 p-3 rounded-full mr-4">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{currentUser.achievements?.length || 0}</h3>
                        <p className="text-gray-600">Achievements Earned</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="p-6 border-b">
                    <h2 className="font-serif text-xl font-bold">Continue Learning</h2>
                  </div>
                  
                  <div className="divide-y">
                    {inProgressCourses.slice(0, 3).map(course => (
                      <div key={course?.id} className="p-6 flex flex-col sm:flex-row sm:items-center">
                        <div className="sm:w-16 sm:h-16 mb-4 sm:mb-0 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={course?.thumbnail} 
                            alt={course?.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="sm:ml-4 flex-grow">
                          <h3 className="font-medium mb-1">{course?.title}</h3>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>Last accessed 2 days ago</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                            <div 
                              className="bg-primary-600 h-1.5 rounded-full" 
                              style={{ width: `${course?.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">{course?.progress}% complete</span>
                            <Link 
                              to={`/courses/${course?.id}`}
                              className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200"
                            >
                              Continue
                              <ChevronRight className="inline-block h-4 w-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {inProgressCourses.length === 0 && (
                      <div className="p-8 text-center">
                        <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 mb-4">You're not enrolled in any courses yet.</p>
                        <Link to="/courses" className="btn btn-primary">
                          Browse Courses
                        </Link>
                      </div>
                    )}
                  </div>
                  
                  {inProgressCourses.length > 0 && (
                    <div className="p-4 bg-gray-50 text-center">
                      <Link 
                        to="#" 
                        onClick={() => setActiveTab('courses')}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                      >
                        View All Courses
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="font-serif text-xl font-bold">Recent Achievements</h2>
                  </div>
                  
                  <div className="divide-y">
                    {currentUser.achievements?.slice(0, 3).map(achievement => (
                      <div key={achievement.id} className="p-6 flex items-center">
                        <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Award className="h-6 w-6 text-accent-600" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">{achievement.title}</h3>
                          <p className="text-sm text-gray-600 mb-1">{achievement.description}</p>
                          <p className="text-xs text-gray-500">Earned on {new Date(achievement.dateEarned).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                    
                    {(!currentUser.achievements || currentUser.achievements.length === 0) && (
                      <div className="p-8 text-center">
                        <Award className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600">Complete courses and lessons to earn achievements!</p>
                      </div>
                    )}
                  </div>
                  
                  {currentUser.achievements && currentUser.achievements.length > 0 && (
                    <div className="p-4 bg-gray-50 text-center">
                      <Link 
                        to="#" 
                        onClick={() => setActiveTab('achievements')}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                      >
                        View All Achievements
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {/* My Courses Tab */}
            {activeTab === 'courses' && (
              <div>
                <h1 className="font-serif text-2xl font-bold mb-6">My Courses</h1>
                
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-serif text-xl font-bold">In Progress</h2>
                    <div className="text-sm text-gray-600">
                      {inProgressCourses.length} courses
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {inProgressCourses.map(course => (
                      <div key={course?.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="aspect-video relative">
                          <img 
                            src={course?.thumbnail} 
                            alt={course?.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4">
                            <div className="text-white font-medium mb-1">{course?.title}</div>
                            <div className="text-white/80 text-sm flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {course?.duration}
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-600">{course?.progress}% complete</span>
                            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full">
                              {course?.level.charAt(0).toUpperCase() + course?.level.slice(1)}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                            <div 
                              className="bg-primary-600 h-1.5 rounded-full" 
                              style={{ width: `${course?.progress}%` }}
                            ></div>
                          </div>
                          <Link 
                            to={`/courses/${course?.id}`}
                            className="btn btn-primary w-full"
                          >
                            Continue Learning
                          </Link>
                        </div>
                      </div>
                    ))}
                    
                    {inProgressCourses.length === 0 && (
                      <div className="col-span-2 bg-white rounded-lg shadow-sm p-8 text-center">
                        <BookOpen className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600 mb-4">You're not enrolled in any courses yet.</p>
                        <Link to="/courses" className="btn btn-primary">
                          Browse Courses
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-serif text-xl font-bold">Completed</h2>
                    <div className="text-sm text-gray-600">
                      {completedCourses.length} courses
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {completedCourses.map(course => (
                      <div key={course?.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="aspect-video relative">
                          <img 
                            src={course?.thumbnail} 
                            alt={course?.title} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-4">
                            <div className="text-white font-medium mb-1">{course?.title}</div>
                            <div className="text-white/80 text-sm flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {course?.duration}
                            </div>
                          </div>
                          <div className="absolute top-2 right-2 bg-success-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                            Completed
                          </div>
                        </div>
                        <div className="p-4 flex justify-between items-center">
                          <div className="flex items-center">
                            {course?.certification && (
                              <div className="text-xs bg-accent-100 text-accent-800 px-2 py-0.5 rounded-full flex items-center mr-2">
                                <Award className="h-3 w-3 mr-1" />
                                Certificate
                              </div>
                            )}
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                              {course?.level.charAt(0).toUpperCase() + course?.level.slice(1)}
                            </span>
                          </div>
                          <Link 
                            to={`/courses/${course?.id}`}
                            className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors duration-200"
                          >
                            Review
                          </Link>
                        </div>
                      </div>
                    ))}
                    
                    {completedCourses.length === 0 && (
                      <div className="col-span-2 bg-white rounded-lg shadow-sm p-8 text-center">
                        <Award className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                        <p className="text-gray-600">Complete courses to see them here!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div>
                <h1 className="font-serif text-2xl font-bold mb-6">Achievements</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-xl font-bold">Your Progress</h2>
                    <span className="text-sm font-medium bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {currentUser.achievements?.length || 0} / 20 Earned
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                      className="bg-primary-600 h-2.5 rounded-full" 
                      style={{ width: `${((currentUser.achievements?.length || 0) / 20) * 100}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-sm text-gray-600">
                    Keep learning to unlock more achievements and rewards!
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentUser.achievements?.map(achievement => (
                    <div key={achievement.id} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-accent-600" />
                      </div>
                      <h3 className="font-serif font-bold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
                      <div className="mt-auto text-xs text-gray-500">
                        Earned on {new Date(achievement.dateEarned).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                  
                  {/* Placeholder for locked achievements */}
                  {[...Array(6 - (currentUser.achievements?.length || 0))].map((_, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center opacity-60">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="font-serif font-bold text-lg mb-2">Locked Achievement</h3>
                      <p className="text-gray-500 text-sm mb-4">
                        Continue your learning journey to unlock this achievement.
                      </p>
                      <div className="mt-auto text-xs text-gray-400">
                        Keep learning to unlock
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Settings Tab */}
            {activeTab === 'settings' && (
              <div>
                <h1 className="font-serif text-2xl font-bold mb-6">Account Settings</h1>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="p-6 border-b">
                    <h2 className="font-serif text-xl font-bold mb-4">Profile Information</h2>
                    <p className="text-gray-600 text-sm">
                      Update your account's profile information and email address.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <div className="flex items-center mb-6">
                        <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                          <img 
                            src={currentUser.profileImage} 
                            alt={currentUser.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Profile Photo</h3>
                          <div className="flex space-x-3">
                            <button className="flex items-center text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-3 py-1.5 rounded-md">
                              <Upload className="h-4 w-4 mr-1" />
                              New Image
                            </button>
                            <button className="text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 px-3 py-1.5 rounded-md">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="label">Name</label>
                          <input
                            type="text"
                            id="name"
                            className="input"
                            defaultValue={currentUser.name}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="label">Email</label>
                          <input
                            type="email"
                            id="email"
                            className="input"
                            defaultValue={currentUser.email}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="bio" className="label">Bio</label>
                      <textarea
                        id="bio"
                        className="input"
                        rows={4}
                        defaultValue={currentUser.bio}
                      ></textarea>
                      <p className="text-xs text-gray-500 mt-1">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
                    
                    <button className="btn btn-primary">
                      Save Changes
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="p-6 border-b">
                    <h2 className="font-serif text-xl font-bold mb-4">Password</h2>
                    <p className="text-gray-600 text-sm">
                      Ensure your account is using a secure password.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="current_password" className="label">Current Password</label>
                        <input
                          type="password"
                          id="current_password"
                          className="input"
                        />
                      </div>
                      <div></div>
                      <div>
                        <label htmlFor="new_password" className="label">New Password</label>
                        <input
                          type="password"
                          id="new_password"
                          className="input"
                        />
                      </div>
                      <div>
                        <label htmlFor="confirm_password" className="label">Confirm Password</label>
                        <input
                          type="password"
                          id="confirm_password"
                          className="input"
                        />
                      </div>
                    </div>
                    
                    <button className="btn btn-primary mt-6">
                      Update Password
                    </button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="font-serif text-xl font-bold mb-4">Preferences</h2>
                    <p className="text-gray-600 text-sm">
                      Manage your notification preferences and privacy settings.
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-medium mb-4">Email Notifications</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Course Updates</h4>
                          <p className="text-sm text-gray-500">Receive updates about courses you're enrolled in</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">New Lessons</h4>
                          <p className="text-sm text-gray-500">Get notified when new lessons are added to your courses</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Promotions</h4>
                          <p className="text-sm text-gray-500">Receive promotional offers and discounts</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <h3 className="font-medium mb-4">Privacy Settings</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Profile Visibility</h4>
                          <p className="text-sm text-gray-500">Make your profile visible to other students</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">Show Progress</h4>
                          <p className="text-sm text-gray-500">Display your course progress on your public profile</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    </div>
                    
                    <button className="btn btn-primary mt-6">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;