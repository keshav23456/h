export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export const products: Product[] = [
  {
    id: 'steam-boiler-electric',
    title: 'Electric Steam Boiler',
    description: 'Advanced electric steam boilers engineered for safe and efficient steam generation, perfect for industrial applications.',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
    category: 'Steam Boilers',
    details: [
      'Fully automated operation',
      'High energy efficiency',
      'Low maintenance requirements',
      'Advanced safety features',
      'Remote monitoring capability'
    ],
    faqs: [
      {
        question: 'What is the maximum steam output capacity?',
        answer: 'Our electric steam boilers range from 50 kg/hr to 2000 kg/hr steam output capacity.'
      },
      {
        question: 'What pressure ranges can the boiler operate at?',
        answer: 'The boilers can operate at pressures ranging from 3 bar to 10 bar, depending on your requirements.'
      },
      // Add 8 more FAQs
    ]
  },
  // Add more products with similar structure
];