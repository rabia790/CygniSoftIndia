
import React from 'react';
import { 
  Users, 
  Target, 
  Globe, 
  Headphones, 
  Cpu, 
  Code2, 
  GraduationCap 
} from 'lucide-react';
import { NavItem, StatItem, PillarItem, StepItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Talent', href: '#talent' },
  { label: 'Technology', href: '#technology' },
  { label: 'Training', href: '#training' },
];

export const STATS: StatItem[] = [
  { 
    label: 'Successful Placements', 
    value: '200+', 
    icon: <Users className="w-6 h-6 text-[#FF9933]" /> 
  },
  { 
    label: 'Client Retention', 
    value: '95%', 
    icon: <Target className="w-6 h-6 text-[#138808]" /> 
  },
  { 
    label: 'Offshore Excellence', 
    value: 'Global', 
    icon: <Globe className="w-6 h-6 text-[#FF9933]" /> 
  },
  { 
    label: 'Global Support', 
    value: '24/7', 
    icon: <Headphones className="w-6 h-6 text-[#138808]" /> 
  },
];

export const PILLARS: PillarItem[] = [
  {
    title: 'Elite Tech Staffing',
    description: 'Sourcing the top 1% of Indian engineers across AI, Cloud, and Enterprise systems for global enterprises.',
    icon: <Cpu className="w-8 h-8 text-[#FF9933]" />
  },
  {
    title: 'Bespoke Software Development',
    description: 'Custom implementation of Microsoft Dynamics 365, Power Platform, AI systems, and scalable Mobile Apps.',
    icon: <Code2 className="w-8 h-8 text-[#138808]" />
  },
  {
    title: 'Global Training Programs',
    description: 'Industry-certified programs in Generative AI, Salesforce, Azure, and modern Cloud Engineering.',
    icon: <GraduationCap className="w-8 h-8 text-white" />
  }
];

export const BLUEPRINT_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Discover & Define',
    description: 'Deep dive into business goals, system requirements, and talent gaps.'
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Architecting scalable solutions and visual workflows for stakeholder alignment.'
  },
  {
    number: '03',
    title: 'Develop & Iterate',
    description: 'Agile execution using elite talent pools and high-frequency deployment cycles.'
  },
  {
    number: '04',
    title: 'Deploy & Scale',
    description: 'Global launch with continuous optimization and 24/7 engineering support.'
  }
];
