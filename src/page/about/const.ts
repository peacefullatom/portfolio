import { IAboutExperience, IAboutReading, IAboutSkills } from './types';

export const aboutSkills: IAboutSkills[] = [
  { title: 'Programming languages', items: ['JavaScript', 'C++', 'PHP', 'C#', 'SQL'] },
  { title: 'Techniques', items: ['OOP', 'Functional programming', 'CRUD', 'REST'] },
  { title: 'Web development', items: ['HTML', 'CSS', 'Node.js'] },
  { title: 'Databases', items: ['MongoDB', 'MSSQL'] },
  {
    title: 'Libraries/frameworks',
    items: [
      'TypeScript',
      'Angular',
      'Angular Material',
      'React',
      'React Native',
      'Redux',
      'Vue',
      'jQuery',
      'D3.js',
      'Electron.js',
      'Chai.js',
      'Mocha.js',
      'Sinon.js',
      'Babel',
      'Webpack',
      'Bootstrap',
      'SCSS',
      'LESS'
    ]
  },
  { title: 'Tools', items: ['Git', 'Visual Studio', 'Visual Studio Code', 'WebStorm', 'NPM', 'Yarn', 'Jira'] },
  { title: 'Development', items: ['Agile', 'SCRUM'] }
];

export const aboutExperience: IAboutExperience[] = [
  {
    startDate: new Date(2004, 6),
    endDate: new Date(2008, 3),
    company: 'OKOS LLC',
    title: 'Network operations center engineer',
    description: [
      'Development, management, upgrade of network, including VPN, LAN in big buildings, joints of ISDN, ADSL, Fiber, Ethernet nets.',
      'Support of third party software running on Windows and Linux.',
      'Management of MS SQL Server 2005: database development, reports generation.'
    ]
  },
  {
    startDate: new Date(2008, 3),
    endDate: new Date(2012, 8),
    company: 'NMS CJSC',
    title: 'Network operations center engineer',
    description: [
      'Network administrator: Cisco, Huawei, etc.',
      'Mail server administrator.',
      'Administrator/developer of MS SQL 2008 database.',
      'Partly web developer.'
    ]
  },
  {
    startDate: new Date(2012, 8),
    endDate: new Date(2014, 1),
    company: 'NMS CJSC',
    title: 'Software Developer',
    description: [
      'Database developer: MS SQL Server 2012.',
      'IPTV interface developer for various set of STBs.',
      'Administrator of mail server.',
      'Various tasks of business automation: automated reports generation, reminders system (based on DB and mail server, with web interface) etc.',
      'Support of incident management system.'
    ]
  },
  {
    startDate: new Date(2014, 1),
    endDate: new Date(2014, 2),
    company: 'WildRed LLC',
    title: 'IPTV engineer',
    description: [
      'Worked as IPTV engineer in Bolshoy Ice Dome during Olympic games 2014 on behalf of WildRed LLC.',
      'Main tasks were: initial hardware installation, support of system during Olympic games, dismantle of hardware upon event completion, resolving of issues connected with work of system in Bolshoy Ice Dome.',
      'Also worked as guide and interpreter for English speaking guests in free time on my own initiative.'
    ]
  },
  {
    startDate: new Date(2014, 2),
    endDate: new Date(2017, 3),
    company: 'SoftM LLC',
    title: 'Software developer',
    description: [
      'Database developer: MS SQL Server 2012.',
      'Administrator of mail server.',
      'Various tasks of business automation: automated reports generation, reminders system (based on DB and mail server, with web interface) etc.',
      'Development and support of CRM.'
    ]
  },
  {
    startDate: new Date(2017, 3),
    endDate: new Date(2018, 10),
    company: 'Foresight LLC',
    title: 'Front-end developer',
    description: [
      'Development & support of corporate solution used in BI, resolving issues found by testers/customers.',
      'Development of a component base.',
      'Migrating the solution to TypeScript.',
      'Development of mobile application using React Native.',
      'Integration of D3.js library.',
      'Implementation of SCSS.'
    ]
  },
  {
    startDate: new Date(2018, 10),
    company: 'Simpl LLC',
    title: 'Senior front-ent developer',
    description: [
      'Migration of existing projects to Angular 8.',
      'Development and implementation of a unified front-end core library shared across projects.',
      'Management of development of two corporate projects.',
      'Conduction of corporate training courses.',
      'Training junior developers.'
    ]
  }
];

export const aboutReading: IAboutReading[] = [
  {
    title: `Rangle's Angular Training Book`,
    linkLabel: 'angular-2-training-book.rangle.io',
    linkHref: 'https://angular-2-training-book.rangle.io',
    description: [
      'One of the best sources about Angular (and not only!) available online.',
      'Includes: set of best practices; ready to use solutions; basic recommendations; etc.',
      'Written in a very understandable manner, so, the course can be easily understood by novice, but also contains a lot of professional tips.'
    ]
  },
  {
    title: `Overreacted`,
    linkLabel: 'overreacted.io',
    linkHref: 'https://overreacted.io/',
    description: ['Source useful information about React as well as personal opinions about everything (including programming).']
  },
  {
    title: `Angular blog`,
    linkLabel: 'blog.angular.io',
    linkHref: 'https://blog.angular.io/',
    description: ['News and Tips from the Angular Team.']
  },
  {
    title: `Blog of X-Team`,
    linkLabel: 'x-team.com',
    linkHref: 'https://x-team.com/blog/',
    description: ['Links to training resources.', 'Tips and tricks about remote working.', 'Programming tips, reviews, etc.']
  }
];
