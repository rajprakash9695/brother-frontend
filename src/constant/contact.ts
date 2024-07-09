interface IContact {
  img: string;
  title: string;
  description: string;
  contact: string;
}

const CConstant: IContact[] = [
  {
    img: 'https://img.icons8.com/?size=64&id=48193&format=png',
    title: 'Give Us a Call',
    description:
      'Ready to take your business intelligence to the next level? Our team at Panopted Group',
    contact: '(239) 555-18099',
  },
  {
    img: 'https://img.icons8.com/?size=64&id=l8GURTKU12XE&format=png',
    title: 'Send Us an Email',
    description:
      'Ready to take your business intelligence to the next level? Our team at Panopted Group',
    contact: 'panoptes@hello.com',
  },
  {
    img: 'https://img.icons8.com/?size=64&id=44023&format=png',
    title: 'Visit Our Office',
    description:
      'Ready to take your business intelligence to the next level? Our team at Panopted Group',
    contact: '4140 Parker Rd. Allentown, New Mexico',
  },
];

export default CConstant;
