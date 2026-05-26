import type { Project } from '@/types/project';
import type { Service } from '@/types/service';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Modern scalable web applications with fast responsive interfaces and robust server architecture.',
    techBadges: ['React', 'Next.js', 'Node.js'],
  },
  { title: 'Mobile Applications', description: 'React Native and Expo apps.' },
  {
    title: 'Desktop Applications',
    description: 'Cross-platform desktop software using Tauri.',
  },
  { title: 'Telegram Bot Development', description: 'Automation and integrations.' },
  {
    title: 'Database & API Integration',
    description: 'Custom integrations and backend connectivity.',
  },
  { title: 'Performance Optimization', description: 'Speed improvements and optimization.' },
];

export const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'React Native',
  'Expo',
  'TypeScript',
  'JavaScript',
  'Firebase',
  'Tauri',
  'Python',
] as const;

export const projects: Project[] = [
  {
    title: 'Full Website Development',
    category: 'Web Development',
    description:
      'Full-stack web application development with modern technologies.',
    stack: ['Next.js', 'Supabase', 'TypeScript'],
  },
  {
    title: 'Telegram Automation System',
    category: 'Bot Development',
    description: 'Automated Telegram workflows for notifications, moderation, and CRM-style flows.',
    stack: ['Node.js', 'Telegram API', 'TypeScript'],
  },
  {
    title: 'Cross Platform Mobile Application',
    category: 'Mobile Development',
    description: 'A performant mobile product built for Android and iOS with shared code architecture.',
    stack: ['React Native', 'Expo', 'Firebase'],
  },
];

export const processSteps = [
  { title: 'Discovery', description: 'Understanding requirements and goals.' },
  { title: 'Planning', description: 'Architecture and technical planning.' },
  { title: 'Development', description: 'Implementation and iteration.' },
  { title: 'Testing', description: 'Performance and quality verification.' },
  { title: 'Delivery', description: 'Deployment and handoff.' },
] as const;
