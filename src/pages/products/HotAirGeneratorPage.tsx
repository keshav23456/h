import React from 'react';
import Faq from 'react-faq-component';

const HotAirGeneratorPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What are the main applications for wood-fired hot air generators?",
        content: "Our hot air generators are commonly used in agricultural drying, timber seasoning, food processing, and industrial heating applications."
      },
      {
        title: "What is the temperature range these generators can achieve?",
        content: "Our systems can generate hot air from ambient temperature up to 200°C, with precise temperature control throughout the range."
      },
      {
        title: "How efficient are your hot air generators?",
        content: "Our wood-fired hot air generators achieve thermal efficiency up to 85%, with advanced heat recovery systems."
      },
      {
        title: "What types of wood fuel can be used?",
        content: "The generators can use various wood fuels including logs, chips, pellets, and agricultural waste with moisture content up to 30%."
      },
      {
        title: "What emission control systems are included?",
        content: "Our systems include cyclone separators, multi-stage filtration, and optional ESP systems for ultra-low emissions."
      },
      {
        title: "How is the air flow rate controlled?",
        content: "Variable speed fans with automated controls maintain precise air flow rates based on temperature and process requirements."
      },
      {
        title: "What safety features are incorporated?",
        content: "Systems include over-temperature protection, flame monitoring, emergency shutdown, and automatic fire suppression."
      },
      {
        title: "What is the maintenance schedule?",
        content: "Daily visual checks, weekly ash removal, monthly filter cleaning, and annual comprehensive service are recommended."
      },
      {
        title: "Can these systems be integrated with existing processes?",
        content: "Yes, our hot air generators can be integrated with existing drying, heating, or processing systems through standard ducting."
      },
      {
        title: "What is the typical payback period?",
        content: "Most installations achieve ROI within 12-24 months through fuel cost savings compared to fossil fuel systems."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Wood Fired Hot Air Generators</h1>
            <p className="text-xl text-primary-100">
              Clean, efficient hot air generation for industrial processes
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2846615/pexels-photo-2846615.jpeg"
                alt="Wood Fired Hot Air Generator"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Industrial Hot Air Solutions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our wood-fired hot air generators deliver reliable, sustainable heating for 
                industrial processes. With advanced combustion technology and sophisticated 
                controls, these systems provide consistent temperature control while 
                minimizing emissions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Clean Combustion</h3>
                    <p className="text-gray-600">Advanced combustion technology for minimal emissions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Precise Control</h3>
                    <p className="text-gray-600">Accurate temperature and airflow management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Fuel Flexibility</h3>
                    <p className="text-gray-600">Compatible with various biomass fuel types</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Heat Output</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 100 kW - 2000 kW</li>
                  <li>• Modulating output control</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Air Flow Rate</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Up to 50,000 m³/hr</li>
                  <li>• Variable speed control</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Temperature Range</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ambient to 200°C</li>
                  <li>• ±1°C accuracy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="bg-white rounded-lg shadow-lg">
              <Faq 
                data={faqData}
                styles={{
                  bgColor: 'transparent',
                  titleTextColor: '#1a1a1a',
                  rowTitleColor: '#1a1a1a',
                  rowContentColor: '#4a5568',
                  arrowColor: '#48944f',
                }}
                config={{
                  animate: true,
                  openOnload: 0,
                  expandIcon: '+',
                  collapseIcon: '-',
                }}
              />
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team to discuss your hot air generation requirements and get a customized solution.
            </p>
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HotAirGeneratorPage;