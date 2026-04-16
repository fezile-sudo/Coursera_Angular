import { Leader } from './leader';

export const LEADERS: Leader[] = [
  {
    id: '0',
    name: 'Peter Pan',
    image: './images/alberto.png',
    designation: 'Chief Epicurious Officer',
    abbr: 'CEO',
    featured: false,
    description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents..."
  },
  {
    id: '1',
    name: 'Dhanasekaran Witherspoon',
    image: 'images/alberto.png',
    designation: 'Chief Food Officer',
    abbr: 'CFO',
    featured: false,
    description: 'Our CFO, Danny...'
  },
  {
    id: '2',
    name: 'Agumbe Tang',
    image: 'images/alberto.png',
    designation: 'Chief Taste Officer',
    abbr: 'CTO',
    featured: false,
    description: 'Blessed with the most discerning gustatory sense...'
  },
  {
    id: '3',
    name: 'Alberto Somayya',
    image: 'images/alberto.png',
    designation: 'Executive Chef',
    abbr: 'EC',
    featured: true,
    description: 'Award winning three-star Michelin chef...'
  }
];