import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import JobsContent from './JobsContent'

export const metadata: Metadata = {
  title: '41+ Open Jobs at Position Ventures Portfolio Companies | Tech Startup Careers',
  description: 'Browse 41+ open positions at Position Ventures portfolio companies including Sesame, Anrok, Patlytics, Pine, and Savvy Wealth. Find engineering, sales, product, and operations roles at fast-growing startups with competitive salaries from $79K-$320K.',
  keywords: 'Position Ventures jobs, startup jobs, tech jobs, engineering jobs, sales jobs, product manager jobs, AI startup careers, fintech jobs, SaaS jobs, remote jobs, hybrid jobs, NYC tech jobs, SF tech jobs, venture capital portfolio careers, Sesame jobs, Anrok careers, Patlytics hiring, Pine jobs, Savvy Wealth careers',
  authors: [{ name: 'Position Ventures' }],
  creator: 'Position Ventures',
  publisher: 'Position Ventures',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://positionventures.com/jobs',
    title: '41+ Open Jobs at Position Ventures Portfolio Companies',
    description: 'Join exceptional startups backed by Position Ventures. Browse engineering, sales, product, and operations roles with salaries from $79K-$320K at companies like Sesame, Anrok, and more.',
    siteName: 'Position Ventures',
    images: [
      {
        url: 'https://positionventures.com/og-image-jobs.jpg',
        width: 1200,
        height: 630,
        alt: '41+ Open Jobs at Position Ventures Portfolio Companies - Tech Startup Careers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '41+ Jobs at Position Ventures Portfolio Companies',
    description: 'Engineering, sales, product & operations roles at fast-growing startups. Salaries $79K-$320K. Apply now.',
    creator: '@jennydhe',
    images: ['https://positionventures.com/og-image-jobs.jpg'],
  },
  alternates: {
    canonical: 'https://positionventures.com/jobs',
  },
  other: {
    'article:modified_time': new Date().toISOString(),
  },
}

interface Job {
  id: string
  title: string
  company: string
  companyUrl: string
  department: string
  location: string
  type: string
  salary?: string
  description: string
  applyUrl: string
}

export default function Jobs() {
  const jobs: Job[] = [
    // Sesame jobs
    {
      id: 'sesame-backend-infra',
      title: 'Backend Infrastructure Engineer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Build scalable backend infrastructure for hardware-software integration in healthcare technology.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-ios',
      title: 'iOS Engineer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Develop iOS applications for innovative healthcare technology solutions.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-ml-serving',
      title: 'ML Model Serving Engineer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Deploy and optimize machine learning models for production healthcare applications.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-product-eng',
      title: 'Product Engineer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Bridge product and engineering to deliver exceptional user experiences in healthcare.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-ml-scientist',
      title: 'ML Scientist',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$190K - $320K',
      description: 'Research and develop cutting-edge machine learning algorithms for healthcare applications.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-electrical',
      title: 'Electrical Engineer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Hardware',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Design and develop electrical systems for innovative healthcare hardware.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-embedded',
      title: 'Embedded Engineer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Hardware',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Develop embedded systems for next-generation healthcare devices.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-embedded-os',
      title: 'Embedded OS Architect',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Hardware',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$190K - $320K',
      description: 'Architect operating system solutions for embedded healthcare devices.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-mechanical',
      title: 'Mechanical Engineer, Product Design',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Hardware',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Design mechanical components and systems for healthcare hardware products.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-pm-hardware',
      title: 'Product Manager, Hardware',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Lead product strategy and development for innovative healthcare hardware.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-research-3d',
      title: 'Research Engineer — 3D Reconstruction and Rendering',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Vision',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Work on cutting-edge 3D reconstruction and rendering technologies for healthcare applications.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-research-cv',
      title: 'Research Engineer - Computer Vision ML',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Vision',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Develop computer vision and machine learning solutions for medical imaging applications.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-office-manager',
      title: 'Office Manager & Executive Assistant',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Operations',
      location: 'Bellevue, WA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Manage office operations and provide executive support for leadership team.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },
    {
      id: 'sesame-product-designer',
      title: 'Product Designer',
      company: 'Sesame',
      companyUrl: 'https://www.sesame.com/',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$175K - $280K',
      description: 'Design intuitive and beautiful user experiences for healthcare technology products.',
      applyUrl: 'https://jobs.ashbyhq.com/sesame'
    },

    // Patlytics jobs
    {
      id: 'patlytics-fullstack-apac',
      title: 'Full Stack Software Engineer (APAC)',
      company: 'Patlytics',
      companyUrl: 'https://www.patlytics.ai/',
      department: 'Engineering',
      location: 'Remote (APAC)',
      type: 'Full-time',
      description: 'Build AI-powered patent analysis tools and platforms for global markets.',
      applyUrl: 'https://jobs.ashbyhq.com/patlytics'
    },
    {
      id: 'patlytics-fullstack-na',
      title: 'Full Stack Software Engineer (North America)',
      company: 'Patlytics',
      companyUrl: 'https://www.patlytics.ai/',
      department: 'Engineering',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Develop full-stack solutions for AI-driven patent intelligence platform.',
      applyUrl: 'https://jobs.ashbyhq.com/patlytics'
    },
    {
      id: 'patlytics-ip-attorney',
      title: 'IP Attorney / Strategic Business Development Lead',
      company: 'Patlytics',
      companyUrl: 'https://www.patlytics.ai/',
      department: 'Operations',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Lead business development and provide IP expertise for patent analytics platform.',
      applyUrl: 'https://jobs.ashbyhq.com/patlytics'
    },
    {
      id: 'patlytics-designer',
      title: 'Product Designer',
      company: 'Patlytics',
      companyUrl: 'https://www.patlytics.ai/',
      department: 'Design',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Design intuitive user experiences for AI-powered patent analysis tools.',
      applyUrl: 'https://jobs.ashbyhq.com/patlytics'
    },

    // Pine jobs
    {
      id: 'pine-backend-dev',
      title: 'Senior Back End Developer',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Engineering',
      location: 'Toronto, ON',
      type: 'Full-time',
      description: 'Build backend systems for innovative mortgage and real estate technology platform.',
      applyUrl: 'https://job-boards.greenhouse.io/pine/jobs/4417002008'
    },
    {
      id: 'pine-bizops-coop',
      title: 'BizOps Analyst - Fall 2025 Coop',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Operations',
      location: 'Toronto, ON',
      type: 'Co-op/Internship',
      description: 'Support operations and analyze business processes in mortgage operations team.',
      applyUrl: 'https://job-boards.greenhouse.io/pine/jobs/4782522008'
    },
    {
      id: 'pine-bdr',
      title: 'Business Development Representative - Residential Mortgages',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Sales',
      location: 'Canada (Remote)',
      type: 'Full-time',
      description: 'Drive client outreach and mortgage qualification for residential mortgage platform.',
      applyUrl: 'https://job-boards.greenhouse.io/pine/jobs/4780927008'
    },
    {
      id: 'pine-mortgage-advisor-toronto',
      title: 'Mortgage Advisor',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Operations',
      location: 'Toronto, ON',
      type: 'Full-time',
      description: 'Manage customer deal flow and provide mortgage advisory services.',
      applyUrl: 'https://job-boards.greenhouse.io/pine'
    },
    {
      id: 'pine-mortgage-advisor-vancouver',
      title: 'Mortgage Advisor',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Operations',
      location: 'Vancouver, BC',
      type: 'Full-time',
      description: 'Manage customer deal flow and provide mortgage advisory services.',
      applyUrl: 'https://job-boards.greenhouse.io/pine'
    },
    {
      id: 'pine-mortgage-advisor-calgary',
      title: 'Mortgage Advisor',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Operations',
      location: 'Calgary, AB',
      type: 'Full-time',
      description: 'Manage customer deal flow and provide mortgage advisory services.',
      applyUrl: 'https://job-boards.greenhouse.io/pine'
    },
    {
      id: 'pine-real-estate',
      title: 'Licensed Real Estate Agent',
      company: 'Pine',
      companyUrl: 'https://www.pine.ca/',
      department: 'Real Estate',
      location: 'Toronto, ON',
      type: 'Full-time',
      description: 'Handle property sales, rentals, and provide market insights for Pine Homes.',
      applyUrl: 'https://job-boards.greenhouse.io/pine/jobs/4755399008'
    },

    // Anrok jobs
    {
      id: 'anrok-ae-commercial',
      title: 'Account Executive, Commercial',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Sales',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      salary: '$79K - $143.8K + Equity + Commission',
      description: 'Drive commercial sales for modern sales tax compliance platform.',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-ae-enterprise',
      title: 'Account Executive, Enterprise',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Sales',
      location: 'Remote',
      type: 'Full-time',
      salary: '$250K - $300K + Equity + Commission',
      description: 'Lead enterprise sales initiatives for automated tax compliance solutions.',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-ae-midmarket',
      title: 'Account Executive, Mid Market',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Sales',
      location: 'San Francisco or Salt Lake City (Hybrid)',
      type: 'Full-time',
      salary: '$112K - $225K + Equity + Commission',
      description: 'Drive mid-market sales for modern sales tax compliance platform.',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-filing-manager',
      title: 'Filing Manager, Tax Operations',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Tax Operations',
      location: 'Salt Lake City (Hybrid)',
      type: 'Full-time',
      salary: '$110K - $150K + Equity',
      description: 'Manage tax filing operations and compliance processes.',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-software-engineer',
      title: 'Software Engineer',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable solutions for automated tax compliance platform (4+ years experience).',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-senior-software-engineer',
      title: 'Senior Software Engineer',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead technical initiatives for tax compliance automation (7+ years experience).',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-infrastructure-engineer',
      title: 'Infrastructure Engineer',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and maintain infrastructure for tax compliance platform (5+ years experience).',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-engineering-manager',
      title: 'Engineering Manager',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead engineering teams building modern tax compliance solutions.',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },
    {
      id: 'anrok-sdr',
      title: 'Sales Development Representative',
      company: 'Anrok',
      companyUrl: 'https://www.anrok.com/',
      department: 'Sales',
      location: 'San Francisco or Remote',
      type: 'Full-time',
      description: 'Generate and qualify leads for modern sales tax compliance platform.',
      applyUrl: 'https://jobs.ashbyhq.com/anrok'
    },

    // WorkWhile jobs
    {
      id: 'workwhile-frontend',
      title: 'Frontend Engineer',
      company: 'WorkWhile',
      companyUrl: 'https://www.workwhilejobs.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build responsive web applications using React, TypeScript, Styled Components, React Native, and Expo.',
      applyUrl: 'https://workwhile.notion.site/WorkWhile-Open-Positions-b6461923c2c445fb8921495951b933f8'
    },
    {
      id: 'workwhile-backend',
      title: 'Backend Engineer',
      company: 'WorkWhile',
      companyUrl: 'https://www.workwhilejobs.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop scalable backend systems using Python, PostgreSQL, Flask, Redis, and Google Cloud Platform.',
      applyUrl: 'https://workwhile.notion.site/WorkWhile-Open-Positions-b6461923c2c445fb8921495951b933f8'
    },
    {
      id: 'workwhile-fullstack',
      title: 'Full Stack Engineer',
      company: 'WorkWhile',
      companyUrl: 'https://www.workwhilejobs.com/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Work across the stack with React, TypeScript, Python, and PostgreSQL to build AI-powered labor platform.',
      applyUrl: 'https://workwhile.notion.site/WorkWhile-Open-Positions-b6461923c2c445fb8921495951b933f8'
    },
    {
      id: 'workwhile-data-science',
      title: 'Data Science Engineer',
      company: 'WorkWhile',
      companyUrl: 'https://www.workwhilejobs.com/',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build ML models and data pipelines using Python, PostgreSQL, BigQuery, Scikit-learn, TensorFlow, and Dagster.',
      applyUrl: 'https://workwhile.notion.site/WorkWhile-Open-Positions-b6461923c2c445fb8921495951b933f8'
    },

    // Twelve Labs jobs
    {
      id: 'twelve-labs-ml-research',
      title: 'ML Research Engineer',
      company: 'Twelve Labs',
      companyUrl: 'https://twelvelabs.io/',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Research and develop video embedding, retrieval, and multimodal language modeling for AI video understanding.',
      applyUrl: 'https://twelvelabs.io/careers'
    },
    {
      id: 'twelve-labs-infrastructure',
      title: 'Software Engineer, Infrastructure (On-premise)',
      company: 'Twelve Labs',
      companyUrl: 'https://twelvelabs.io/',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and maintain on-premise solutions for video AI infrastructure.',
      applyUrl: 'https://twelvelabs.io/careers'
    },
    {
      id: 'twelve-labs-solutions',
      title: 'Solutions Architect',
      company: 'Twelve Labs',
      companyUrl: 'https://twelvelabs.io/',
      department: 'Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Work with customers on video and AI integration for multimodal understanding.',
      applyUrl: 'https://twelvelabs.io/careers'
    },
    {
      id: 'twelve-labs-counsel',
      title: 'Head of Commercial Counsel',
      company: 'Twelve Labs',
      companyUrl: 'https://twelvelabs.io/',
      department: 'Legal',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead commercial legal initiatives for AI video understanding platform.',
      applyUrl: 'https://twelvelabs.io/careers'
    },

    // Persona AI jobs
    {
      id: 'persona-ai-backend',
      title: 'Backend Engineer',
      company: 'Persona AI',
      companyUrl: 'https://www.persona-ai.ai/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable backend systems for human-AI interaction platform.',
      applyUrl: 'https://www.persona-ai.ai/'
    },
    {
      id: 'persona-ai-data-scientist',
      title: 'Data Scientist',
      company: 'Persona AI',
      companyUrl: 'https://www.persona-ai.ai/',
      department: 'Data Science',
      location: 'Remote',
      type: 'Full-time',
      description: 'Analyze user interaction data to improve AI persona experiences.',
      applyUrl: 'https://www.persona-ai.ai/'
    },
    {
      id: 'persona-ai-frontend',
      title: 'Frontend Engineer',
      company: 'Persona AI',
      companyUrl: 'https://www.persona-ai.ai/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create intuitive user interfaces for AI persona interactions.',
      applyUrl: 'https://www.persona-ai.ai/'
    },
    {
      id: 'persona-ai-ml',
      title: 'Machine Learning Engineer',
      company: 'Persona AI',
      companyUrl: 'https://www.persona-ai.ai/',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and deploy ML models for human-AI interaction platform.',
      applyUrl: 'https://www.persona-ai.ai/'
    },
    {
      id: 'persona-ai-designer',
      title: 'Product Designer',
      company: 'Persona AI',
      companyUrl: 'https://www.persona-ai.ai/',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design user experiences for AI persona interactions and interfaces.',
      applyUrl: 'https://www.persona-ai.ai/'
    },
    {
      id: 'persona-ai-pm',
      title: 'Product Manager',
      company: 'Persona AI',
      companyUrl: 'https://www.persona-ai.ai/',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead product strategy and roadmap for human-AI interaction platform.',
      applyUrl: 'https://www.persona-ai.ai/'
    },

    // Savvy Wealth jobs
    {
      id: 'savvy-cio',
      title: 'Chief Investment Officer',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Investment',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Lead investment strategy and advisor services for wealth management platform.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-data-engineer',
      title: 'Founding Data Engineer',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Engineering',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Build data infrastructure and analytics platform for wealth management technology.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-head-people',
      title: 'Head of People & Talent',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'People',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Lead talent acquisition, people operations, and culture development.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-marketing-manager',
      title: 'Marketing Manager',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Marketing',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Drive marketing initiatives and brand awareness for wealth management platform.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-product-design',
      title: 'Product Design Lead',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Design',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Lead product design and user experience for wealth management platform.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-senior-engineer',
      title: 'Senior Software Engineer',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Engineering',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      description: 'Develop software solutions for innovative wealth management technology.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-senior-advisor',
      title: 'Senior Wealth Advisor',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Advisory',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Provide wealth advisory services to high-net-worth clients.',
      applyUrl: 'https://www.savvywealth.com/careers'
    },
    {
      id: 'savvy-growth-manager',
      title: 'Strategic Growth Manager',
      company: 'Savvy Wealth',
      companyUrl: 'https://www.savvywealth.com/',
      department: 'Growth',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Drive strategic growth initiatives and business development.',
      applyUrl: 'https://www.savvywealth.com/careers'
    }
  ]

  // Generate JSON-LD structured data for job postings
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Position Ventures Portfolio Company Jobs",
    "description": "Job openings at Position Ventures portfolio companies",
    "numberOfItems": jobs.length,
    "itemListElement": jobs.map((job, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "JobPosting",
        "@id": `https://positionventures.com/jobs#${job.id}`,
        "title": job.title,
        "description": job.description,
        "hiringOrganization": {
          "@type": "Organization",
          "name": job.company,
          "sameAs": job.companyUrl
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.location
          }
        },
        "employmentType": job.type.toUpperCase().replace('-', '_'),
        "baseSalary": job.salary ? {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": {
            "@type": "QuantitativeValue",
            "value": job.salary
          }
        } : undefined,
        "url": job.applyUrl
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        <Navigation />
        <JobsContent jobs={jobs} />
        <Footer />
      </div>
    </>
  )
}