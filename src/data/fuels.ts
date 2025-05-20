export interface Fuel {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  calorificValue: string;
  advantages: string[];
  applications: string[];
}

export const fuels: Fuel[] = [
  {
    id: 'biomass-briquettes',
    name: 'Biomass Briquettes',
    type: 'Briquettes',
    description: 'Densified blocks made from agricultural waste—ideal for replacing coal in boilers and kilns.',
    image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg',
    calorificValue: '4800',
    advantages: [
      'High density and consistent quality',
      'Low moisture content',
      'Reduced storage space requirement',
      'Easy handling and transportation',
      'Lower emissions compared to coal'
    ],
    applications: [
      'Industrial boilers',
      'Brick kilns',
      'Food processing industries',
      'Textile industries'
    ]
  },
  // Add more fuels with similar structure
];