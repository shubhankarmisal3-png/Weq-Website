// lib/data.ts - All static site data (no API needed)

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'AI Solutions', href: '/services/ai-solutions' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'Mobile Apps', href: '/services/mobile-apps' },
      { label: 'ERP Systems', href: '/services/erp-systems' },
      { label: 'CRM Systems', href: '/services/crm-systems' },
      { label: 'Shopify', href: '/services/shopify' },
      { label: 'WordPress', href: '/services/wordpress' },
    ],
  },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'Locations',
    href: '#',
    children: [
      { label: 'Mumbai', href: '/location-mumbai' },
      { label: 'Pune', href: '/location-pune' },
      { label: 'New York', href: '/location-new-york' },
      { label: 'California', href: '/location-california' },
      { label: 'Minnesota', href: '/location-minnesota' },
    ],
  },
  { label: 'Contact Us', href: '/contact-us' },
]

export const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 9, suffix: '+', label: 'Industries Served' },
  { value: 100, suffix: '+', label: 'Clients Across Globe' },
]

export const locations = [
  { city: 'Mumbai', country: 'India' },
  { city: 'Pune', country: 'India' },
  { city: 'New York', country: 'USA' },
  { city: 'California', country: 'USA' },
  { city: 'Minnesota', country: 'USA' },
]

export const services = [
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description:
      'Revolutionize your business processes with the power of Artificial Intelligence and Machine Learning. We streamline operations and empower you to make data-driven decisions effortlessly.',
    items: [
      'Technology Assessment',
      'Fractional CTO',
      'Business Consultancy',
      'ERP Software Development',
      'CRM Development',
      'Custom Software Development',
      'Integration',
    ],
    icon: '⚙️',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description:
      'Bring your ideas to life with our comprehensive product engineering services. From concept to execution, we deliver scalable and innovative solutions.',
    items: [
      'Web App Development',
      'Mobile App Development',
      'Flutter App Development',
      'Python Applications',
      'LMS Development',
      'Java Application Development',
    ],
    icon: '🚀',
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Drive growth with cutting-edge Website and e-commerce platforms. We create seamless, engaging experiences that boost user satisfaction and sales.',
    items: [
      'WordPress Development',
      'Shopify Development',
      'WooCommerce Development',
      'Drupal Development',
      'Webflow Development',
    ],
    icon: '🌐',
  },
  {
    id: 'ux-design',
    title: 'UX Design',
    description:
      'Captivate your audience with intuitive and engaging designs. Our team crafts user-centric interfaces that enhance every interaction.',
    items: [
      'Website Design',
      'UI/UX Design',
      'Illustration Design',
      'UX Audit',
      'Mobile App Design',
    ],
    icon: '🎨',
  },
]

export const industries = [
  'Healthcare & Fitness',
  'Manufacturing & Automobile Industry',
  'E-commerce & Retail',
  'Education and E-Learning',
  'Banking & Finance',
  'News & Publication',
  'Supply Chain & Logistics',
  'Food & Beverages',
]

export const process = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We begin by understanding your vision and conducting market research to build a solid project foundation.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'Our experts craft user-focused solutions that align with your goals, turning concepts into seamless prototypes.',
  },
  {
    step: '03',
    title: 'Deliver',
    description:
      'We deliver testing, training, and ongoing support to keep your product updated and optimized for success.',
  },
]

export const caseStudies = [
  {
    id: 'dyd',
    title: 'DYD',
    tags: ['UI/UX Design', 'App & Web Development'],
    href: '/case-studies/dyd',
    bgColor: '#1a1714',
  },
  {
    id: 'brego',
    title: 'Brego Land',
    tags: ['UI/UX Design', 'App & Web Development'],
    href: '/case-studies/bregoland',
    bgColor: '#252220',
  },
  {
    id: 'edstate',
    title: 'Edstate',
    tags: ['UI/UX Design', 'App & Web Development'],
    href: '/case-studies/edstate',
    bgColor: '#1e1b18',
  },
]

export const testimonials = [
  {
    id: 1,
    quote:
      "WEQ Technologies is a great team for all types of web services. We are a communication design agency and have been getting the websites we design developed by the WEQ team and we have experienced a great amount of passion & commitment in the WEQ team for each project. The team is flexible & always ready to accept challenges. When we give the development job to the WEQ team we feel our client's website is in safe hands.",
    name: 'Mr. Suyog Baakre',
    role: 'Founder - CLAY INC',
  },
  {
    id: 2,
    quote:
      "It has been an absolute pleasure to have been associated with WEQ team for over a year. We worked together to release the first version of SaveIN's flagship Fintech product, chasing an aggressive timeline, and it wouldn't have been possible to do so without the prompt professional support of the WEQ team. The post-release support has also been remarkable. I strongly recommend WEQ for developing class leading mobile and web based applications.",
    name: 'Mr. Anurag Verma',
    role: 'SaveIn Money - Co-Founder & CPO',
  },
  {
    id: 3,
    quote:
      "WEQ Technologies is a great team for all types of web services. We are a communication design agency and have been getting the websites we design developed by the WEQ team and we have experienced a great amount of passion & commitment in the WEQ team for each project. The team is flexible & always ready to accept challenges.",
    name: 'Harneet Kaur Malhi',
    role: 'Brand Communication Manager, Adani University',
  },
  {
    id: 4,
    quote:
      'The WEQ Technologies team delivered on the promises for the project. The client was most impressed by the vendor\'s professionalism, communication & honesty in their abilities. They initiated contact and always kept the client in the loop. They continue working together on updates when needed.',
    name: 'Dr. Charisma Judge & Dr. Philips Judge',
    role: 'Veterinary Consulting Platform - Director',
  },
  {
    id: 5,
    quote:
      "I want to applaud the WEQ team for their incredible work on the Travel and Attendance project in our CRM. It was the most challenging task for VAK, and they delivered brilliantly. A special thanks to Nikhil Mistry for his unwavering support and positive attitude. You've been essential to our success, and we truly appreciate you!",
    name: 'Sachin Poojare',
    role: 'Partner in VAK Reports Financial Services',
  },
]

export const clientLogos = [
  { name: 'Adani', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/adani-image.png?fit=180%2C82&ssl=1' },
  { name: 'Brego Land', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/brego-land.png?fit=188%2C85&ssl=1' },
  { name: 'DealAbhi', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/deal-abhi.png?fit=167%2C74&ssl=1' },
  { name: 'SaveIn', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/savein.png?fit=185%2C82&ssl=1' },
  { name: 'Sabka Dentist', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/sabka-debtist.png?fit=189%2C84&ssl=1' },
  { name: 'Cimpress', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/cimpress.png?fit=174%2C78&ssl=1' },
  { name: 'DYD', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/dyd.png?fit=124%2C44&ssl=1' },
  { name: 'Edstate', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/ed-state.png?fit=166%2C68&ssl=1' },
  { name: 'FibWave', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/fib-wave.png?fit=101%2C69&ssl=1' },
  { name: 'Great Manager', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/great-manager.png?fit=114%2C69&ssl=1' },
  { name: 'Saarathi', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/saarhi-mere.png?fit=211%2C43&ssl=1' },
  { name: 'Namastey Salon', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/namastey-salon.png?fit=188%2C81&ssl=1' },
  { name: 'Pazcare', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/pazcare.png?fit=152%2C68&ssl=1' },
  { name: 'Play', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/play.png?fit=140%2C63&ssl=1' },
  { name: 'Pride', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/09/pride.png?fit=146%2C42&ssl=1' },
  { name: 'Toyota', src: 'https://i0.wp.com/weqtechnologies.com/wp-content/uploads/2024/10/toyota.png?fit=164%2C33&ssl=1' },
]

export const faqs = [
  {
    id: 1,
    question: 'What mobile app development services do you offer?',
    answer:
      'WEQ provides comprehensive mobile app development services, including Android, iOS and Hybrid apps. Our services cover business, utility, and enterprise applications, ensuring functionality and user engagement.',
  },
  {
    id: 2,
    question: 'What software development services do you offer?',
    answer:
      'WEQ specializes in custom software and web application development using advanced technologies like MEAN Stack, PHP, and ReactJS. Our solutions are tailored to meet the specific needs of diverse industries.',
  },
  {
    id: 3,
    question: 'What are the typical features included in your mobile app development services?',
    answer:
      'Our mobile app development services include intuitive UI/UX design, robust functionality and thorough testing to ensure a seamless user experience. We employ Agile methodologies to deliver incremental improvements and adaptability.',
  },
  {
    id: 4,
    question: 'Do you provide custom software solutions tailored to specific business needs?',
    answer:
      "Yes, WEQ Technologies specializes in developing software solutions that are strategically aligned with the unique needs and objectives of each business. Our team leverages cutting-edge technologies and deep industry insights to design, develop and deploy tailored solutions that drive transformative value.",
  },
  {
    id: 5,
    question: 'What is your approach to developing mobile apps and software?',
    answer:
      'WEQ adopts an Agile development approach, focusing on MVP (Minimum Viable Product) development and iterative enhancements. This ensures flexibility, rapid delivery, and alignment with client goals.',
  },
  {
    id: 6,
    question: 'How do you ensure the security of the applications you develop?',
    answer:
      'WEQ employs robust security measures, including secure communication protocols, data encryption, and regular security testing to safeguard applications against vulnerabilities.',
  },
  {
    id: 7,
    question: 'Can you assist with digital transformation initiatives?',
    answer:
      'WEQ partners with businesses to drive digital transformation, utilizing cutting-edge technologies and strategic insights to enhance operational efficiency and customer experience.',
  },
  {
    id: 8,
    question: 'What industries do you serve with your technology solutions?',
    answer:
      'WEQ has extensive experience across various industries, including education, supply chain and logistics, food and beverages, news and publication and the automobile sector.',
  },
]

export const footerLinks = {
  services: [
    { label: 'AI Solutions and Services', href: '/services/ai-solutions' },
    { label: 'Bespoke Software Development', href: '/services/custom-software' },
    { label: 'Mobile App Development', href: '/services/mobile-apps' },
    { label: 'ERP Software Development', href: '/services/erp-systems' },
    { label: 'CRM Development', href: '/services/crm-systems' },
    { label: 'Shopify Development', href: '/services/shopify' },
    { label: 'WordPress Development', href: '/services/wordpress' },
  ],
  caseStudies: [
    { label: 'Adani', href: '/case-studies/adani' },
    { label: 'Edstate', href: '/case-studies/edstate' },
    { label: 'Brego Land', href: '/case-studies/bregoland' },
    { label: 'Mechmiles', href: '/case-studies/mechmiles' },
    { label: 'DYD', href: '/case-studies/dyd' },
  ],
  company: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Career', href: '/career' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
}
