import React from 'react';
import Faq from 'react-faq-component';

const SteamBoilerPage: React.FC = () => {
  const faqData = {
    rows: [
      {
        title: "What are the key advantages of our steam boilers?",
        content: "Our steam boilers offer high efficiency (up to 95%), low maintenance requirements, advanced safety features, and both electric and wood-fired options to suit different operational needs."
      },
      {
        title: "What is the typical steam output capacity range?",
        content: "Our steam boilers range from 100 kg/hr to 5000 kg/hr, with custom capacities available for specific requirements."
      },
      {
        title: "What safety features are included?",
        content: "Standard safety features include automatic pressure control, water level monitoring, safety valve, flame failure protection, and emergency shutdown systems."
      },
      {
        title: "What is the expected lifespan of your steam boilers?",
        content: "With proper maintenance, our steam boilers typically last 15-20 years. Regular servicing can extend this lifespan further."
      },
      {
        title: "How energy efficient are your steam boilers?",
        content: "Our steam boilers achieve efficiency ratings of 90-95% for electric models and 82-87% for wood-fired versions, significantly reducing operational costs."
      },
      {
        title: "What maintenance is required?",
        content: "Regular maintenance includes daily water quality checks, weekly blowdown procedures, monthly safety valve testing, and annual comprehensive inspections."
      },
      {
        title: "What fuel options are available?",
        content: "We offer both electric-powered boilers and wood-fired models that can use various biomass fuels including wood chips, pellets, and briquettes."
      },
      {
        title: "How long does installation take?",
        content: "Typical installation takes 3-5 days, including setup, testing, and operator training. Complex installations may require additional time."
      },
      {
        title: "What control systems are included?",
        content: "Our boilers feature PLC-based control systems with touchscreen interfaces, remote monitoring capabilities, and automated operation management."
      },
      {
        title: "What warranty coverage is provided?",
        content: "We provide a standard 2-year warranty on parts and labor, with extended warranty options available up to 5 years."
      }
    ]
  };

  return (
    <>
      <section className="bg-primary-800 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Steam Boilers</h1>
            <p className="text-xl text-primary-100">
              Advanced steam generation solutions for industrial applications
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                alt="Industrial Steam Boiler"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Electric & Wood-fired Steam Boilers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our steam boilers represent the pinnacle of industrial steam generation technology, 
                offering both electric and wood-fired options to meet diverse operational needs. 
                These systems are engineered for optimal efficiency, safety, and reliability in 
                demanding industrial environments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">High Efficiency</h3>
                    <p className="text-gray-600">Up to 95% efficiency rating, minimizing energy waste</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Advanced Controls</h3>
                    <p className="text-gray-600">PLC-based system with remote monitoring capabilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold">Safety Features</h3>
                    <p className="text-gray-600">Comprehensive safety systems for worry-free operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Capacity Range</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 100 - 5000 kg/hr</li>
                  <li>• Custom sizes available</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Operating Pressure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Up to 10.5 kg/cm²</li>
                  <li>• Adjustable pressure control</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Power Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Electric: 440V, 3-phase</li>
                  <li>• Wood-fired capability</li>
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
              Contact our team to discuss your steam boiler requirements and get a customized solution.
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

export default SteamBoilerPage;