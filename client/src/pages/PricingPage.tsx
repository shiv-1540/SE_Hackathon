import React, { useState } from 'react';
import { CheckCircle, X, CreditCard, Calendar } from 'lucide-react';
import { subscriptionPlans } from '../data/mockData';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');
  
  return (
    <div className="pt-24 md:pt-32 pb-16">
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Choose the Perfect Plan for Your Musical Journey
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Whether you're just starting out or looking to master advanced skills, we have the right plan to help you achieve your musical goals.
        </p>
        
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              billingCycle === 'monthly'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annually')}
            className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
              billingCycle === 'annually'
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Annually
            <span className="ml-1 text-xs font-bold bg-green-100 text-green-800 py-0.5 px-1.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </section>
      
      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subscriptionPlans.map(plan => {
            // Calculate the price based on billing cycle
            const price = billingCycle === 'annually' 
              ? plan.price * 12 * 0.8 // 20% discount for annual
              : plan.price;
              
            return (
              <div 
                key={plan.id} 
                className={`bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg ${
                  plan.isPopular ? 'border-2 border-primary-600 relative transform md:-translate-y-2' : 'border border-gray-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="bg-primary-600 text-white text-center text-sm py-1">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">${price.toFixed(2)}</span>
                    <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {plan.name === 'Free' 
                      ? 'Perfect for beginners exploring the basics.' 
                      : plan.name === 'Basic'
                      ? 'Great for dedicated music students ready to grow.'
                      : plan.name === 'Premium'
                      ? 'Ideal for serious musicians seeking comprehensive learning.'
                      : 'For professionals and aspiring music careers.'}
                  </p>
                  
                  <button className={`w-full mb-6 py-2 rounded-md font-medium ${
                    plan.name === 'Free'
                      ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      : 'btn btn-primary'
                  }`}>
                    {plan.name === 'Free' ? 'Get Started' : 'Subscribe Now'}
                  </button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">
          Compare Plan Features
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-gray-600 font-medium">Features</th>
                {subscriptionPlans.map(plan => (
                  <th key={plan.id} className="py-4 px-6 text-center">
                    <span className="font-serif font-bold">{plan.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-4 px-6 text-gray-700">Course Access</td>
                {subscriptionPlans.map(plan => (
                  <td key={plan.id} className="py-4 px-6 text-center">
                    {plan.courseAccess === 'unlimited' 
                      ? <span className="text-success-600 font-medium">Unlimited</span>
                      : plan.name === 'Free'
                      ? <span>Limited (10 courses)</span>
                      : <span>Limited (100+ courses)</span>
                    }
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700">Downloadable Resources</td>
                {subscriptionPlans.map(plan => (
                  <td key={plan.id} className="py-4 px-6 text-center">
                    {plan.resourceAccess 
                      ? <CheckCircle className="h-5 w-5 text-success-600 mx-auto" />
                      : <X className="h-5 w-5 text-gray-400 mx-auto" />
                    }
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700">Community Access</td>
                {subscriptionPlans.map(plan => (
                  <td key={plan.id} className="py-4 px-6 text-center">
                    {plan.communityAccess 
                      ? <CheckCircle className="h-5 w-5 text-success-600 mx-auto" />
                      : <X className="h-5 w-5 text-gray-400 mx-auto" />
                    }
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700">Certification Access</td>
                {subscriptionPlans.map(plan => (
                  <td key={plan.id} className="py-4 px-6 text-center">
                    {plan.certificationAccess 
                      ? <CheckCircle className="h-5 w-5 text-success-600 mx-auto" />
                      : <X className="h-5 w-5 text-gray-400 mx-auto" />
                    }
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700">Instructor Support</td>
                {subscriptionPlans.map(plan => (
                  <td key={plan.id} className="py-4 px-6 text-center">
                    {plan.instructorSupport 
                      ? <CheckCircle className="h-5 w-5 text-success-600 mx-auto" />
                      : <X className="h-5 w-5 text-gray-400 mx-auto" />
                    }
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 text-gray-700">Live Sessions per Month</td>
                {subscriptionPlans.map(plan => (
                  <td key={plan.id} className="py-4 px-6 text-center font-medium">
                    {plan.liveSessionsPerMonth}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg font-bold mb-3">Can I upgrade or downgrade my plan?</h3>
            <p className="text-gray-700">
              Yes, you can upgrade or downgrade your subscription plan at any time. Changes will take effect at the start of your next billing cycle.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg font-bold mb-3">How do I cancel my subscription?</h3>
            <p className="text-gray-700">
              You can cancel your subscription from your account settings. You'll continue to have access to your plan's features until the end of your current billing period.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg font-bold mb-3">Are there any refunds if I'm not satisfied?</h3>
            <p className="text-gray-700">
              We offer a 7-day money-back guarantee for all new subscriptions. If you're not satisfied with your experience, contact our support team within 7 days of subscribing.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg font-bold mb-3">What payment methods do you accept?</h3>
            <p className="text-gray-700">
              We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment partners.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-serif text-lg font-bold mb-3">Can I share my account with others?</h3>
            <p className="text-gray-700">
              Each subscription is for individual use only. Sharing your account is against our terms of service and may result in account termination.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-12 rounded-lg max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
              Ready to Start Your Musical Journey?
            </h2>
            <p className="text-white/80">
              Join thousands of students learning music with Harmonia.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-white text-primary-700 hover:bg-gray-100">
              Get Started Free
            </button>
            <button className="btn border-2 border-white bg-transparent hover:bg-white/10">
              View Plans
            </button>
          </div>
        </div>
      </section>
      
      {/* Payment Security */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            <CreditCard className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-gray-500 font-medium">Secure Payment Processing</span>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            All transactions are secure and encrypted. We never store your credit card information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-100 px-3 py-2 rounded-md text-xs text-gray-600">
              <Calendar className="h-4 w-4 inline-block mr-1" />
              7-Day Money Back Guarantee
            </div>
            <div className="bg-gray-100 px-3 py-2 rounded-md text-xs text-gray-600">
              Cancel Anytime
            </div>
            <div className="bg-gray-100 px-3 py-2 rounded-md text-xs text-gray-600">
              No Hidden Fees
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;