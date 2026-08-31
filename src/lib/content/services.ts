import type { Service } from './types';

// Service names mirror the live site's "Areas of Expertise" list. Blurbs are short
// summaries of each area.
export const SERVICES: readonly Service[] = [
  {
    slug: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    blurb: 'Applied AI and machine learning for network and telecom data.',
    icon: 'ai-icon',
  },
  {
    slug: 'automation-services',
    name: 'Automation Services',
    blurb: 'Infrastructure, test, and workflow automation across the stack.',
    icon: 'automation',
  },
  {
    slug: 'api',
    name: 'Application Programming Interface',
    blurb: 'Design and delivery of REST and telecom APIs.',
    icon: 'api-dev',
  },
  {
    slug: 'cloud-devops',
    name: 'Cloud and DevOps Services',
    blurb: 'Cloud-native platforms, CI/CD pipelines, and DevOps practice.',
    icon: 'cloud-cservice',
  },
  {
    slug: 'cyber-security',
    name: 'Cyber Security',
    blurb: 'Security engineering, hardening, and assessments.',
    icon: 'cyber-security-icon',
  },
  {
    slug: 'databases-storage',
    name: 'Databases and Storage',
    blurb: 'Data platforms, storage design, and analytics pipelines.',
    icon: 'databases-symbol',
  },
  {
    slug: 'gis',
    name: 'Geographical Information Systems (GIS)',
    blurb: 'Spatial data platforms and mapping solutions.',
    icon: 'gis',
  },
  {
    slug: 'gis-telecommunication',
    name: 'GIS in Telecommunication',
    blurb: 'Geospatial analytics for network planning and operations.',
    icon: 'gis-telco',
  },
  {
    slug: 'monitoring-solutions',
    name: 'Monitoring Solutions',
    blurb: 'Observability, telemetry, and performance monitoring.',
    icon: 'monitoring-performance',
  },
  {
    slug: 'nfv-infrastructure',
    name: 'NFV Infrastructure',
    blurb: 'NFV infrastructure development, automation, and orchestration.',
    icon: 'mano-icon',
  },
  {
    slug: 'open-source',
    name: 'Open-Source Contributions and Development',
    blurb: 'Upstream contributions to networking and cloud projects.',
    icon: 'r-s',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    blurb: 'Consulting, architecture, and delivery support.',
    icon: 'professional',
  },
  {
    slug: 'project-management',
    name: 'Project Management Services',
    blurb: 'Programme and delivery management for technical projects.',
    icon: 'project-management',
  },
  {
    slug: 'quantum-research',
    name: 'Quantum Research',
    blurb: 'Research into quantum computing and communications.',
    icon: 'quantum-computer',
  },
  {
    slug: 'research-standardization',
    name: 'Research and Standardization',
    blurb: 'Participation in standards bodies and applied research.',
    icon: 'r-s',
  },
  {
    slug: 'software-development',
    name: 'Software Development',
    blurb: 'Custom software for networking, telecom, and cloud.',
    icon: 'programming-svgrepo-com',
  },
  {
    slug: 'sonic-nos',
    name: 'SONiC Network Operating System (NOS)',
    blurb: 'SONiC development, porting, and platform bring-up.',
    icon: 'sonic-icon',
  },
  {
    slug: 'testing-validation',
    name: 'Testing and Validation',
    blurb: 'Benchmarking, profiling, and conformance testing.',
    icon: 'testing-validation',
  },
  {
    slug: 'training-services',
    name: 'Training Services',
    blurb: 'Training and certification in SDN, NFV, and OpenStack.',
    icon: 'training',
  },
  {
    slug: 'technical-support',
    name: 'Technical Support',
    blurb: 'Ongoing support for deployed platforms and solutions.',
    icon: 'support',
  },
  {
    slug: 'vulnerability-assessment',
    name: 'Vulnerability Assessment Services',
    blurb: 'Vulnerability scanning and remediation guidance.',
    icon: 'vulnerability-scan-services-icon',
  },
  {
    slug: 'web-application',
    name: 'Web Application',
    blurb: 'Web application design, build, and delivery.',
    icon: 'web-development',
  },
];
