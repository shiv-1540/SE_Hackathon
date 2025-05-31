import React, { useState } from 'react';
import { Search, Users, MessageSquare, ThumbsUp, ChevronRight, Filter } from 'lucide-react';
import { communities } from '../data/mockData';

const CommunityPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const filteredCommunities = communities.filter(community => {
    const matchesSearch = searchTerm === '' || 
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || community.category === selectedCategory;
      
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-24 md:pt-32 pb-16">
      {/* Header */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Connect with the Harmonia Community
            </h1>
            <p className="text-white/80 text-lg mb-6">
              Join discussions, share your progress, collaborate with fellow musicians, and get feedback from instructors and peers.
            </p>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search communities..."
                className="w-full pl-10 pr-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
                <h2 className="font-serif text-xl font-bold mb-4">Categories</h2>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`w-full text-left px-3 py-2 rounded-md ${
                      selectedCategory === '' 
                        ? 'bg-primary-50 text-primary-600 font-medium' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    All Communities
                  </button>
                  
                  {['Instruments', 'Theory', 'Composition', 'Production', 'Performance'].map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md ${
                        selectedCategory === category 
                          ? 'bg-primary-50 text-primary-600 font-medium' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h2 className="font-serif text-xl font-bold mb-4">Quick Links</h2>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                        <span>My Communities</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                        <span>Recent Discussions</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-primary-600 hover:text-primary-700 flex items-center">
                        <span>Community Guidelines</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <button className="btn btn-primary w-full">
                    Create Community
                  </button>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-serif text-2xl font-bold mb-4 sm:mb-0">
                  {selectedCategory ? `${selectedCategory} Communities` : 'All Communities'}
                </h2>
                
                <div className="flex items-center">
                  <button className="flex items-center mr-4 text-gray-700">
                    <Filter className="h-5 w-5 mr-1" />
                    <span>Filter</span>
                  </button>
                  <select className="input text-sm py-1">
                    <option>Most Active</option>
                    <option>Newest</option>
                    <option>Most Members</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
              </div>
              
              {filteredCommunities.length > 0 ? (
                <div className="space-y-6">
                  {filteredCommunities.map(community => (
                    <div key={community.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                      <div className="sm:flex">
                        <div className="sm:w-1/3 h-48 sm:h-auto">
                          <img 
                            src={community.image} 
                            alt={community.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 sm:w-2/3">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-serif text-xl font-bold">{community.name}</h3>
                            <span className="text-xs bg-primary-100 text-primary-800 px-2 py-0.5 rounded-full">
                              {community.category}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-4">{community.description}</p>
                          
                          <div className="flex items-center text-sm text-gray-500 mb-6">
                            <div className="flex items-center mr-4">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{community.memberCount.toLocaleString()} members</span>
                            </div>
                            <div className="flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>{community.discussions.length} discussions</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <button className="btn btn-primary">
                              Join Community
                            </button>
                            <a href="#" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                              View Discussions
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {community.discussions.length > 0 && (
                        <div className="border-t">
                          <div className="p-4 bg-gray-50">
                            <h4 className="font-medium mb-2">Recent Discussions</h4>
                            <div className="space-y-4">
                              {community.discussions.slice(0, 1).map(discussion => (
                                <div key={discussion.id} className="bg-white p-4 rounded-md border">
                                  <div className="flex items-start mb-2">
                                    <img 
                                      src={discussion.author.profileImage} 
                                      alt={discussion.author.name} 
                                      className="w-8 h-8 rounded-full mr-3"
                                    />
                                    <div>
                                      <h5 className="font-medium">{discussion.title}</h5>
                                      <p className="text-xs text-gray-500">
                                        By {discussion.author.name} • {new Date(discussion.createdAt).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3 line-clamp-2">
                                    {discussion.content}
                                  </p>
                                  <div className="flex items-center text-xs text-gray-500">
                                    <div className="flex items-center mr-3">
                                      <MessageSquare className="h-3 w-3 mr-1" />
                                      <span>{discussion.replyCount} replies</span>
                                    </div>
                                    <div className="flex items-center">
                                      <ThumbsUp className="h-3 w-3 mr-1" />
                                      <span>{discussion.likes} likes</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <Users className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="font-serif text-xl font-bold mb-2">No communities found</h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any communities matching your search.
                  </p>
                  <div className="flex justify-center">
                    <button 
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                      }}
                      className="btn btn-primary"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-50 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Start Your Own Community
            </h2>
            <p className="text-gray-700 mb-6">
              Have a specific musical interest not covered by existing communities?
              Create your own and connect with like-minded musicians!
            </p>
            <button className="btn btn-primary">
              Create a Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;