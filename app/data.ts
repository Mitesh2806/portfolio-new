type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Socrates',
    description:
      'A coding platform that empowers developers to learn and practice coding skills in a fun and engaging way.',
    link: 'https://socrates-two.vercel.app/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740295772/Screen_Recording_2025-02-23_125246_aiwnnc.mp4',
    id: 'project1',
  },
    {
    name: 'CalcScribe',
    description: 'An implementation of Apple\'s Calculator but for Windows',
    link: 'https://ai-notes-calc-app.vercel.app/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740308831/Screen_Recording_2025-02-23_163631_uu5lso.mp4',
    id: 'project2',
  },
    {
    name: "Github-rag",
    description: 'A website which analyses any github repo using RAG and gives answer to your every query regarding the repository',
    link: 'https://github-rag.onrender.com',
    video:'https://res.cloudinary.com/dvxizcuse/video/upload/v1762628794/Untitled_video_-_Made_with_Clipchamp_jvbvtz.mp4',
    id: 'project3',
  },
  {
    name: "Instagram-analyser",
    description: 'A website which analyses any instagram account gives analysis on its demographics and helps analyze growth of the account',
    link: 'https://igauto-fe.vercel.app/',
    video:'https://res.cloudinary.com/dvxizcuse/video/upload/v1762629973/igauto-2_yz23ar.mp4',
    id: 'project4',
  },
  {
    name: 'Ecell AIT Pune',
    description: 'Main website for I&E Cell AIT pune',
    link: 'https://www.aitecell.in/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740303326/Screen_Recording_2025-02-23_150428_l9vugp.mp4',
    id: 'project5',
  },

  {
    name: 'Startup Saga',
    description: 'Main website for the event Startup Saga',
    link: 'https://www.startupsaga.in/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740305259/Screen_Recording_2025-02-23_153651_o77sml.mp4',
    id: 'project6',
  },

  {
    name: 'Secret Messenger and Feedback',
    description: 'A website to give anonymous feedback and message using personalised links (under development)',
    link: 'https://secret-messaging-ai.vercel.app/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/image/upload/v1740304621/Screenshot_2025-02-23_152631_zytbdb.png',
    id: 'project7',
  },
 

]

export const WORK_EXPERIENCE: WorkExperience[] = [
 
 
  {
    company: 'Paaltu',
    title: 'Full-stack developer',
    start: 'Feb 2025',
    end: 'August 2025',
    link: 'https://www.mypaaltu.com/',
    id: 'work1',
  },
  {
    company: 'I&E Cell AIT Pune',
    title: 'Technical Lead',
    start: 'Sep 2024',
    end: 'June 2025',
    link: 'https://www.aitecell.in/',
    id: 'work2',
  },
  {
    company: 'Virbike(by UdChalo)',
    title: 'Full-stack app developer',
    start: 'October 2025',
    end: 'Present',
    link: 'https://www.virbike.com/',
    id: 'work3',
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Use-ref hooks in React and how to use them',
    description:
      'How do you use use-ref hooks in React and how to use them',
    link: '/blog/useRef-hooks-usage',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Mitesh2806',
  },
  {
    label: 'X',
    link: 'https://x.com/maity_mitesh',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/mitesh-maity-3573201b7/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/miteshmaity280603/',
  },
]

export const EMAIL = 'miteshmaity280603@gmail.com'
