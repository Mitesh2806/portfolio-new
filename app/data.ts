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
    name: 'Ecell AIT Pune',
    description: 'Main website for I&E Cell AIT pune',
    link: 'https://www.aitecell.in/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740303326/Screen_Recording_2025-02-23_150428_l9vugp.mp4',
    id: 'project2',
  },
  {
    name: 'CalcScribe',
    description: 'An implementation of Apple\'s Calculator but for Windows',
    link: 'https://ai-notes-calc-app.vercel.app/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740308831/Screen_Recording_2025-02-23_163631_uu5lso.mp4',
    id: 'project3',
  },
  {
    name: 'Startup Saga',
    description: 'Main website for the event Startup Saga',
    link: 'https://www.startupsaga.in/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/video/upload/v1740305259/Screen_Recording_2025-02-23_153651_o77sml.mp4',
    id: 'project4',
  },
  {
    name: 'Secret Messenger and Feedback',
    description: 'A website to give anonymous feedback and message using personalised links (under development)',
    link: 'https://secret-messaging-ai.vercel.app/',
    video:
      'https://res.cloudinary.com/ddtcw7zsr/image/upload/v1740304621/Screenshot_2025-02-23_152631_zytbdb.png',
    id: 'project5',
  },
 

]

export const WORK_EXPERIENCE: WorkExperience[] = [
 
 
  {
    company: 'Paaltu',
    title: 'Front-end Developer',
    start: 'Dec 2024',
    end: 'Jan 2025',
    link: 'https://paaltu.vercel.app/',
    id: 'work1',
  },
  {
    company: 'I&E Cell AIT Pune',
    title: 'Technical Lead',
    start: 'Sep 2024',
    end: 'Present',
    link: 'https://www.aitecell.in/',
    id: 'work2',
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
