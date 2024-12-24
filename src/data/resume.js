const resumeData = [
  {
    title: 'Catalyst Software',
    dateStart: '01/2022',
    dateEnd: '02/2024',
    description: ''
  },
  {
    title: 'Kochava, Inc',
    dateStart: '01/2017',
    dateEnd: '02/2022',
    description: ''
  }
]

export const data = {
  name: 'Mike Fritzsche',
  address: 'Post Falls, ID 83854',
  socialLinks: [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/mike-fritzsche'},
  ],
  summary: `
    Senior Front End Web Developer with over 9 years of experience in building responsive, high-performance web applications. 
    Proficient in modern JavaScript frameworks, HTML5, CSS3, and committed to creating user-friendly interfaces with a focus on optimization and conversion rates.
  `,
  skills: [
    'Languages & Frameworks: JavaScript, TypeScript, Vue.js, React, React Native, Next.js, HTML5, CSS3, SASS/LESS',
    'Tools & Technologies: Git, Webpack, Docker, CI/CD, Jest/Chai (TDD), Agile methodologies',
    'Specialties: Responsive design, Performance optimization, Cross-browser compatibility, API integration',
  ],
  professionExperience: [
    {
      positionName: 'Senior Frontend Engineer',
      title: 'Catalyst Software (Remote)',
      dateStart: '01/2022',
      dateEnd: '02/2024',
      keyTasks: [
        'Developed API-driven, customer-facing single page applications (SPAs) using Vue.js, Vuex, and Vue Router',
        'Led projects, managing both frontend and backend engineers, and communicating with Product Managers and Designers',
        'Implemented data visualization features for large datasets, enhancing customer insights into marketing campaign performance',
        'Conducted code reviews and mentored junior developers to improve code quality and team skills',
      ]
    },
    {
      positionName: 'Senior Frontend Engineer',
      title: 'Kochava, Inc',
      dateStart: '01/2017',
      dateEnd: '02/2022',
      keyTasks: [
        'Built and maintained a complex, data-intensive marketing platform using Vue.js, Vuex, and ECMA2015+',
        'Designed and implemented responsive UI components, ensuring cross-browser compatibility and mobile optimization',
        'Collaborated with backend developers to design and implement RESTful APIs',
        'Optimized application performance, resulting in improved load times and user engagement',
      ]
    },
    {
      positionName: 'Freelance UI Developer',
      title: 'Various Clients',
      dateStart: '05/2005',
      dateEnd: '09/2014',
      keyTasks: [
        'Built and maintained a complex, data-intensive marketing platform using Vue.js, Vuex, and ECMA2015+',
        'Designed and implemented responsive UI components, ensuring cross-browser compatibility and mobile optimization',
        'Collaborated with backend developers to design and implement RESTful APIs',
        'Optimized application performance, resulting in improved load times and user engagement',
      ]
    }
  ],

  education: 'High School Diploma | Nevada Union - Grass Valley, CA | 06/1984'
}

export default resumeData
