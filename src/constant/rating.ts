export interface IRating {
  img: string;
  title: string;
  description: string;
}

const CRating: IRating[] = [
  {
    img: 'https://img.icons8.com/?size=48&id=FZAVbxBN60gj&format=png',
    title: '24/7',
    description: 'Support anytime, anywhere ',
  },
  {
    img: 'https://img.icons8.com/?size=64&id=43666&format=png',
    title: '2 hour',
    description: 'Average response time',
  },
  {
    img: 'https://img.icons8.com/?size=80&id=97612&format=png',
    title: '45+',
    description: 'Total Team Members',
  },
  {
    img: 'https://img.icons8.com/?size=64&id=XskZlykXA2CI&format=png',
    title: '350+',
    description: 'Total Positive Review',
  },
];

export default CRating;
