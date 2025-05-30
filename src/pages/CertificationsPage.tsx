import React from 'react';
import { Award, ChevronRight, CheckCircle, ExternalLink } from 'lucide-react';
import { certifications } from '../data/mockData';

const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32 pb-16">
      {/* Header */}
      <section className="bg-primary-600 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Earn Recognized Music Certifications
            </h1>
            <p className="text-white/80 text-lg mb-6">
              Showcase your skills and achievements with our industry-recognized music certifications. 
              Perfect for building your musical portfolio and advancing your career.
            </p>
            <button className="btn bg-white text-primary-700 hover:bg-gray-100">
              View My Certifications
            </button>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Professional Recognition</h3>
              <p className="text-gray-600">
                Our certifications are designed with industry standards in mind, providing credible verification of your musical abilities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Skill Validation</h3>
              <p className="text-gray-600">
                Demonstrate your proficiency through comprehensive assessments that test both theoretical knowledge and practical skills.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Career Advancement</h3>
              <p className="text-gray-600">
                Enhance your resume, attract more students as a teacher, or qualify for advanced educational opportunities.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl font-bold mb-4">How Certification Works</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Our certification process is designed to be comprehensive yet accessible, ensuring that your musical abilities are thoroughly assessed and recognized.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">1</div>
                <h3 className="font-medium mb-2">Complete Course</h3>
                <p className="text-sm text-gray-600 text-center">
                  Successfully finish all lessons and exercises in the certification course.
                </p>
              </div>
              
              <div className="hidden md:block pt-6">
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </div>
              
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">2</div>
                <h3 className="font-medium mb-2">Pass Assessment</h3>
                <p className="text-sm text-gray-600 text-center">
                  Complete theoretical tests and submit practical demonstrations for review.
                </p>
              </div>
              
              <div className="hidden md:block pt-6">
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </div>
              
              <div className="md:w-1/4 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4 text-lg font-bold">3</div>
                <h3 className="font-medium mb-2">Receive Certification</h3>
                <p className="text-sm text-gray-600 text-center">
                  Get your digital certificate and shareable credentials for your portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Available Certifications */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
            Available Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map(certification => (
              <div key={certification.id} className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="h-48 relative">
                  <img 
                    src={certification.image} 
                    alt={certification.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className="inline-block bg-white text-primary-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {certification.level.charAt(0).toUpperCase() + certification.level.slice(1)}
                    </span>
                    <h3 className="text-white font-serif font-bold text-lg">{certification.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{certification.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Skills Certified:</h4>
                    <ul className="space-y-1">
                      {certification.skills.slice(0, 3).map((skill, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-success-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{skill}</span>
                        </li>
                      ))}
                      {certification.skills.length > 3 && (
                        <li className="text-sm text-primary-600 pl-6">+ {certification.skills.length - 3} more skills</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                      {certification.industry}
                    </span>
                    <button className="btn btn-primary text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Hear from students who have enhanced their musical careers with our certifications.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium">Robert Chen</h3>
                  <p className="text-sm text-gray-600">Piano Instructor</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Piano Performance certification helped me attract more serious students to my teaching practice. The comprehensive assessment gave me credibility that sets me apart from other instructors."
              </p>
              <div className="flex">
                <Award className="h-5 w-5 text-primary-600" />
                <Award className="h-5 w-5 text-primary-600" />
                <Award className="h-5 w-5 text-primary-600" />
                <span className="text-xs text-gray-500 ml-2">Piano Proficiency - Level 3</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Music Producer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Music Production certification was instrumental in helping me land my first studio job. The skills I demonstrated through the certification process gave employers confidence in my abilities."
              </p>
              <div className="flex">
                <Award className="h-5 w-5 text-primary-600" />
                <Award className="h-5 w-5 text-primary-600" />
                <span className="text-xs text-gray-500 ml-2">Production Professional</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student" 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-medium">Miguel Sanchez</h3>
                  <p className="text-sm text-gray-600">Composer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The Composition certification process pushed me to refine my skills and create a professional portfolio. I've since had my work featured in independent films and games."
              </p>
              <div className="flex">
                <Award className="h-5 w-5 text-primary-600" />
                <Award className="h-5 w-5 text-primary-600" />
                <Award className="h-5 w-5 text-primary-600" />
                <span className="text-xs text-gray-500 ml-2">Composition Master</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-serif text-lg font-bold mb-3">How long does it take to earn a certification?</h3>
              <p className="text-gray-700">
                The time required varies by certification level and your existing skills. Basic certifications can be completed in 4-8 weeks, while advanced certifications may take 3-6 months of dedicated study and practice.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-serif text-lg font-bold mb-3">Are the certifications recognized by music schools and employers?</h3>
              <p className="text-gray-700">
                Yes, our certifications are designed in collaboration with industry professionals and educational institutions. Many music schools recognize our certifications for course credit, and employers value the verified skills they represent.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-serif text-lg font-bold mb-3">What if I don't pass the assessment?</h3>
              <p className="text-gray-700">
                If you don't pass initially, you'll receive detailed feedback on areas for improvement. You can retake the assessment after a 30-day waiting period to allow time for additional practice and study.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-serif text-lg font-bold mb-3">How do I share my certification with others?</h3>
              <p className="text-gray-700">
                Upon completion, you'll receive a digital certificate and a unique verification link that you can share on your resume, portfolio, social media, or professional profiles. This link allows others to verify the authenticity of your certification.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-serif text-lg font-bold mb-3">Do certifications expire?</h3>
              <p className="text-gray-700">
                Basic and intermediate certifications do not expire. Advanced and professional certifications are valid for 3 years, after which you can renew through a simplified assessment to demonstrate continued proficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="font-serif text-3xl font-bold mb-4">
            Ready to Certify Your Musical Excellence?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of musicians who have advanced their skills and careers with Harmonia certifications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn bg-white text-primary-600 hover:bg-gray-100">
              Browse Certification Courses
            </button>
            <button className="btn border-2 border-white bg-transparent hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;