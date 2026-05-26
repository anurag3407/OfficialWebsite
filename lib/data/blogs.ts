// ============================================================
// Blog Posts Data
// ============================================================

import type { BlogPost } from '@/lib/types';

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-web3-dapps-from-scratch',
    title: 'Building Web3 DApps from Scratch: A Beginner\'s Guide',
    excerpt:
      'A comprehensive walkthrough of building your first decentralized application using Solidity, Hardhat, and React. From smart contracts to frontend integration.',
    content: `
## Introduction

Web3 development is no longer a niche skill — it's becoming essential for modern developers. In this guide, we'll walk through building a complete decentralized application (DApp) from the ground up.

## Prerequisites

- Solid understanding of JavaScript/TypeScript
- Basic knowledge of React
- MetaMask wallet installed
- Node.js v18+ installed

## Setting Up the Development Environment

First, let's set up our project with Hardhat, one of the most popular Ethereum development frameworks:

\`\`\`bash
mkdir my-dapp && cd my-dapp
npx hardhat init
\`\`\`

## Writing Your First Smart Contract

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 private storedValue;

    event ValueChanged(uint256 newValue);

    function set(uint256 value) public {
        storedValue = value;
        emit ValueChanged(value);
    }

    function get() public view returns (uint256) {
        return storedValue;
    }
}
\`\`\`

## Connecting the Frontend

With our contract deployed, we can now connect it to a React frontend using ethers.js. The key is to create a provider that connects to the user's MetaMask wallet.

## Conclusion

Building DApps combines traditional web development skills with blockchain-specific knowledge. Start small, iterate, and don't be afraid to experiment. The Web3 ecosystem is incredibly welcoming to newcomers.
    `,
    author: {
      name: 'Kavya Reddy',
      avatar: '/images/team/placeholder-6.png',
      role: 'Blockchain Team Lead',
    },
    date: '2025-04-15',
    tags: ['Web3', 'Blockchain', 'Solidity', 'Tutorial'],
    coverImage: '/images/events/hackathon.png',
    readTime: 12,
    featured: true,
  },
  {
    slug: 'mastering-react-server-components',
    title: 'Mastering React Server Components in Next.js',
    excerpt:
      'Deep dive into React Server Components — understanding the mental model, performance benefits, and practical patterns for building faster web apps.',
    content: `
## What Are React Server Components?

React Server Components (RSC) represent a fundamental shift in how we think about rendering. They allow components to run exclusively on the server, sending only the rendered output to the client.

## The Mental Model

Think of Server Components as templates that execute on the server. They can directly access databases, file systems, and other server-side resources without creating API endpoints.

## When to Use Server vs Client Components

**Use Server Components when:**
- Fetching data from a database
- Accessing server-only resources
- Keeping sensitive data on the server

**Use Client Components when:**
- Adding interactivity (onClick, onChange)
- Using React hooks (useState, useEffect)
- Using browser-only APIs

## Practical Patterns

The most effective pattern is to keep your page-level components as Server Components and push client interactivity to the leaf nodes of your component tree.

## Conclusion

Server Components aren't just an optimization — they're a new way of thinking about web applications. Embrace the server-first mindset and your apps will be faster, simpler, and more secure.
    `,
    author: {
      name: 'Arjun Mehta',
      avatar: '/images/team/placeholder-1.png',
      role: 'Web Dev Team Lead',
    },
    date: '2025-03-28',
    tags: ['React', 'Next.js', 'Web Dev', 'Performance'],
    coverImage: '/images/hero/about-illustration.png',
    readTime: 8,
  },
  {
    slug: 'getting-started-with-generative-ai',
    title: 'Getting Started with Generative AI: From Prompts to Production',
    excerpt:
      'Everything you need to know to start building with generative AI. Covers prompt engineering, API integration, RAG pipelines, and deploying AI features.',
    content: `
## The Generative AI Landscape

2024–2025 has been the breakout era for generative AI. From ChatGPT to Claude, Gemini to open-source models like LLaMA — the tools available to developers have never been more powerful.

## Prompt Engineering Fundamentals

The quality of your AI output is directly proportional to the quality of your prompts. Here are key techniques:

1. **Be Specific**: Instead of "Write about dogs", try "Write a 200-word blog post about the health benefits of owning a Golden Retriever"
2. **Provide Context**: Give the model relevant background information
3. **Use Examples**: Few-shot prompting dramatically improves results
4. **Iterate**: Refine your prompts based on outputs

## Building a RAG Pipeline

Retrieval Augmented Generation (RAG) is the most practical pattern for building AI applications:

1. Index your documents into a vector database
2. When a user asks a question, retrieve relevant chunks
3. Pass the retrieved context along with the question to the LLM
4. Return the grounded response

## Deploying AI Features

When deploying AI to production, consider: latency, cost, rate limiting, error handling, and fallback strategies.

## Conclusion

Generative AI is not magic — it's a powerful tool that, when used thoughtfully, can create incredible user experiences. Start building today.
    `,
    author: {
      name: 'Rishi Verma',
      avatar: '/images/team/placeholder-9.png',
      role: 'Gen AI Team Lead',
    },
    date: '2025-05-10',
    tags: ['AI', 'Gen AI', 'LLM', 'Tutorial'],
   coverImage: '/images/events/hackathon.png',
    readTime: 10,
    featured: true,
  },
  {
    slug: 'kaggle-competition-playbook',
    title: 'The Kaggle Competition Playbook: Tips from NIT Patna\'s ML Team',
    excerpt:
      'Battle-tested strategies for performing well in Kaggle competitions — from feature engineering to ensemble methods and avoiding common pitfalls.',
    content: `
## Why Kaggle Competitions Matter

Kaggle competitions are the proving ground for ML practitioners. They teach you skills that textbooks can't — dealing with messy data, optimizing for real metrics, and working under constraints.

## Our Approach

1. **Understand the Data**: Spend 30% of your time on EDA
2. **Baseline First**: Get a simple model working before trying fancy approaches
3. **Feature Engineering**: This is where competitions are won
4. **Validation Strategy**: Your local CV must correlate with the leaderboard
5. **Ensemble**: Combine diverse models for the final submission

## Common Mistakes

- Overfitting to the public leaderboard
- Not reading the competition rules carefully
- Ignoring data leakage in feature engineering
- Spending too much time on hyperparameter tuning vs feature engineering

## Conclusion

Kaggle is a marathon, not a sprint. Consistency, curiosity, and collaboration will take you further than any single technique.
    `,
    author: {
      name: 'Deepak Nair',
      avatar: '/images/team/placeholder-12.png',
      role: 'ML Team Lead',
    },
    date: '2025-02-14',
    tags: ['ML', 'Data Science', 'Kaggle', 'Tips'],
    coverImage: '/images/hero/about-illustration.png',
    readTime: 7,
  },
  {
  slug: 'modern-web-development-trends',
  title: 'Modern Web Development Trends in 2026',
  excerpt:
    'Explore the latest trends shaping the future of web development including AI integrations, server components, and motion UI.',
  content: `
## Introduction

Web development is evolving rapidly with new frameworks and technologies.

## Major Trends

- AI powered interfaces
- Motion driven design
- Edge computing
- Server-first rendering

## Conclusion

Developers who adapt quickly will stay ahead in the industry.
    `,
  author: {
    name: 'Aman Raj',
    avatar: '/images/team/placeholder-1.png',
    role: 'Frontend Developer',
  },
  date: '2025-05-01',
  tags: ['Web Dev', 'React', 'Trends', 'Frontend'],
  coverImage: '/images/events/hackathon.png',
  readTime: 7,
  featured: false,
},

{
  slug: 'complete-guide-to-nextjs',
  title: 'Complete Guide to Next.js for Beginners',
  excerpt:
    'Learn how to build fast and scalable applications using Next.js and React.',
  content: `
## Introduction

Next.js simplifies full-stack React development.

## Features

- Server Side Rendering
- API Routes
- Static Generation
- App Router

## Conclusion

Next.js is one of the best frameworks for modern web apps.
    `,
  author: {
    name: 'Priyanshu Kumar',
    avatar: '/images/team/placeholder-2.png',
    role: 'Full Stack Developer',
  },
  date: '2025-05-02',
  tags: ['Next.js', 'React', 'Web Dev', 'JavaScript'],
  coverImage: '/images/events/hackathon.png',
  readTime: 8,
  featured: true,
},

{
  slug: 'tailwind-css-best-practices',
  title: 'Tailwind CSS Best Practices for Clean UI',
  excerpt:
    'Discover practical techniques for building scalable and maintainable Tailwind CSS projects.',
  content: `
## Why Tailwind?

Tailwind CSS improves development speed significantly.

## Best Practices

- Reusable components
- Consistent spacing
- Responsive utilities
- Proper color usage

## Conclusion

A clean utility strategy makes projects easier to maintain.
    `,
  author: {
    name: 'Neha Singh',
    avatar: '/images/team/placeholder-3.png',
    role: 'UI Engineer',
  },
  date: '2025-05-03',
  tags: ['Tailwind', 'CSS', 'UI/UX', 'Frontend'],
  coverImage: '/images/events/hackathon.png',
  readTime: 6,
  featured: false,
},

{
  slug: 'building-rest-api-with-nodejs',
  title: 'Building REST APIs with Node.js and Express',
  excerpt:
    'A practical introduction to backend API development using Express and Node.js.',
  content: `
## Introduction

REST APIs are the backbone of modern applications.

## Topics Covered

- Routing
- Middleware
- Authentication
- Error handling

## Conclusion

Node.js makes backend development efficient and scalable.
    `,
  author: {
    name: 'Rahul Verma',
    avatar: '/images/team/placeholder-4.png',
    role: 'Backend Developer',
  },
  date: '2025-05-04',
  tags: ['Node.js', 'Backend', 'Express', 'API'],
  coverImage: '/images/events/hackathon.png',
  readTime: 9,
  featured: false,
},

{
  slug: 'react-hooks-explained',
  title: 'React Hooks Explained with Real Examples',
  excerpt:
    'Understand React hooks deeply with practical examples and use cases.',
  content: `
## Introduction

Hooks changed how React applications are built.

## Important Hooks

- useState
- useEffect
- useMemo
- useRef

## Conclusion

Hooks simplify state management and component logic.
    `,
  author: {
    name: 'Shivam Kumar',
    avatar: '/images/team/placeholder-5.png',
    role: 'React Developer',
  },
  date: '2025-05-05',
  tags: ['React', 'Hooks', 'JavaScript', 'Frontend'],
  coverImage: '/images/events/hackathon.png',
  readTime: 7,
  featured: true,
},

{
  slug: 'introduction-to-machine-learning',
  title: 'Introduction to Machine Learning Concepts',
  excerpt:
    'Understand the foundations of machine learning and its real-world applications.',
  content: `
## Introduction

Machine Learning powers many modern technologies.

## Topics

- Supervised learning
- Unsupervised learning
- Neural networks
- Model training

## Conclusion

ML is becoming an essential skill for developers.
    `,
  author: {
    name: 'Ritika Sharma',
    avatar: '/images/team/placeholder-6.png',
    role: 'ML Engineer',
  },
  date: '2025-05-06',
  tags: ['ML', 'AI', 'Data Science', 'Python'],
  coverImage: '/images/events/hackathon.png',
  readTime: 10,
  featured: false,
},

{
  slug: 'framer-motion-animation-guide',
  title: 'Framer Motion Animation Guide for React',
  excerpt:
    'Create smooth and interactive animations in React applications using Framer Motion.',
  content: `
## Introduction

Animations improve user engagement and visual quality.

## Features

- Page transitions
- Hover effects
- Scroll animations
- Gesture animations

## Conclusion

Framer Motion is powerful and beginner friendly.
    `,
  author: {
    name: 'Anjali Gupta',
    avatar: '/images/team/placeholder-7.png',
    role: 'Motion Designer',
  },
  date: '2025-05-07',
  tags: ['Framer Motion', 'Animation', 'React', 'UI'],
  coverImage: '/images/events/hackathon.png',
  readTime: 6,
  featured: false,
},

{
  slug: 'competitive-programming-roadmap',
  title: 'Competitive Programming Roadmap for Beginners',
  excerpt:
    'A complete roadmap for mastering data structures and algorithms.',
  content: `
## Introduction

Competitive programming improves logical thinking.

## Important Topics

- Arrays
- Graphs
- DP
- Trees

## Conclusion

Consistency is the key to improvement in DSA.
    `,
  author: {
    name: 'Nikhil Raj',
    avatar: '/images/team/placeholder-8.png',
    role: 'DSA Mentor',
  },
  date: '2025-05-08',
  tags: ['DSA', 'CP', 'Algorithms', 'Coding'],
  coverImage: '/images/events/hackathon.png',
  readTime: 8,
  featured: true,
},

{
  slug: 'docker-for-web-developers',
  title: 'Docker for Web Developers',
  excerpt:
    'Learn containerization and deployment basics using Docker.',
  content: `
## Introduction

Docker simplifies deployment and development environments.

## Topics Covered

- Containers
- Dockerfiles
- Images
- Docker Compose

## Conclusion

Docker is essential for scalable applications.
    `,
  author: {
    name: 'Sourav Das',
    avatar: '/images/team/placeholder-9.png',
    role: 'DevOps Engineer',
  },
  date: '2025-05-09',
  tags: ['Docker', 'DevOps', 'Backend', 'Deployment'],
  coverImage: '/images/events/hackathon.png',
  readTime: 7,
  featured: false,
},

{
  slug: 'firebase-authentication-guide',
  title: 'Firebase Authentication Complete Guide',
  excerpt:
    'Implement secure authentication in your applications using Firebase.',
  content: `
## Introduction

Authentication is crucial for user-based applications.

## Features

- Google login
- Email authentication
- OTP verification
- Session management

## Conclusion

Firebase makes authentication simple and reliable.
    `,
  author: {
    name: 'Pooja Singh',
    avatar: '/images/team/placeholder-10.png',
    role: 'Firebase Developer',
  },
  date: '2025-05-10',
  tags: ['Firebase', 'Authentication', 'Backend', 'Security'],
  coverImage: '/images/events/hackathon.png',
  readTime: 6,
  featured: false,
},
  {
  slug: 'cybersecurity-basics-for-developers',
  title: 'Cybersecurity Basics Every Developer Should Learn',
  excerpt:
    'Learn the essential cybersecurity concepts developers should know to build safer applications.',
  content: `
## Introduction

Security is one of the most important aspects of modern development.

## Key Concepts

- Authentication
- Authorization
- Encryption
- Secure APIs

## Conclusion

Understanding security fundamentals helps developers build trustworthy systems.
    `,
  author: {
    name: 'Harsh Pandey',
    avatar: '/images/team/placeholder-11.png',
    role: 'Security Engineer',
  },
  date: '2025-05-11',
  tags: ['Cybersecurity', 'Security', 'Backend', 'Web Dev'],
  coverImage: '/images/hero/about-illustration.png',
  readTime: 7,
  featured: false,
},

{
  slug: 'open-source-contribution-guide',
  title: 'Complete Open Source Contribution Guide',
  excerpt:
    'A beginner-friendly roadmap for contributing to open source projects on GitHub.',
  content: `
## Introduction

Open source contributions help developers grow rapidly.

## Topics Covered

- Finding projects
- Creating pull requests
- Writing clean code
- Collaboration tips

## Conclusion

Contributing regularly builds both skill and reputation.
    `,
  author: {
    name: 'Ayush Kumar',
    avatar: '/images/team/placeholder-12.png',
    role: 'Open Source Mentor',
  },
  date: '2025-05-12',
  tags: ['Open Source', 'GitHub', 'Projects', 'Community'],
  coverImage: '/images/events/hackathon.png',
  readTime: 8,
  featured: true,
},

{
  slug: 'building-portfolio-websites',
  title: 'How to Build Stunning Portfolio Websites',
  excerpt:
    'Learn design and development techniques for creating impressive personal portfolio websites.',
  content: `
## Introduction

Your portfolio is your digital identity.

## Important Sections

- Hero section
- Projects showcase
- About section
- Contact page

## Conclusion

A strong portfolio increases opportunities and visibility.
    `,
  author: {
    name: 'Rohan Mishra',
    avatar: '/images/team/placeholder-1.png',
    role: 'Frontend Designer',
  },
  date: '2025-05-13',
  tags: ['Portfolio', 'UI/UX', 'Frontend', 'Design'],
  coverImage: '/images/hero/about-illustration.png',
  readTime: 6,
  featured: false,
},

{
  slug: 'typescript-for-large-projects',
  title: 'Using TypeScript in Large Scale Applications',
  excerpt:
    'Understand how TypeScript improves maintainability and scalability in modern applications.',
  content: `
## Introduction

TypeScript provides type safety and better tooling support.

## Advantages

- Better autocomplete
- Fewer runtime bugs
- Easier refactoring
- Improved maintainability

## Conclusion

TypeScript is essential for scalable modern development.
    `,
  author: {
    name: 'Karan Singh',
    avatar: '/images/team/placeholder-2.png',
    role: 'TypeScript Developer',
  },
  date: '2025-05-14',
  tags: ['TypeScript', 'JavaScript', 'Frontend', 'Backend'],
  coverImage: '/images/events/hackathon.png',
  readTime: 9,
  featured: false,
},

{
  slug: 'devops-roadmap-2026',
  title: 'DevOps Roadmap for Beginners in 2026',
  excerpt:
    'Learn the technologies and tools required to become a successful DevOps engineer.',
  content: `
## Introduction

DevOps combines development and operations practices.

## Technologies

- Docker
- Kubernetes
- CI/CD
- Linux

## Conclusion

DevOps skills are highly valuable in modern software teams.
    `,
  author: {
    name: 'Vikas Raj',
    avatar: '/images/team/placeholder-3.png',
    role: 'DevOps Engineer',
  },
  date: '2025-05-15',
  tags: ['DevOps', 'Docker', 'Cloud', 'Deployment'],
  coverImage: '/images/hero/about-illustration.png',
  readTime: 8,
  featured: true,
}
];
