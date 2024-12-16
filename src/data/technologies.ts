import {
  Code,
  Brain,
  Database,
  Cloud,
  Shield,
  Blocks,
  LineChart,
  Building2,
  Cog,
  Network,
  HardDrive,
  Monitor,
  Radio,
  Terminal,
  ClipboardList,
  Boxes,
  Atom
} from 'lucide-react';

export const technologyCategories = [
  {
    id: 'agile',
    title: 'Agile & Scrum Tools',
    icon: ClipboardList,
    subcategories: ['Jira', 'Trello', 'Azure Boards', 'Confluence']
  },
  {
    id: 'ai',
    title: 'AI and Data Analytics',
    icon: Brain,
    subcategories: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
  },
  {
    id: 'business',
    title: 'Business Applications',
    icon: Building2,
    subcategories: ['SAP', 'ERP', 'CRM', 'E-Commerce', 'DRM']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: Cog,
    subcategories: ['RPA', 'Workflow Automation', 'Process Mining']
  },
  {
    id: 'blockchain',
    title: 'Blockchain',
    icon: Blocks,
    subcategories: ['Ethereum', 'Hyperledger', 'Smart Contracts']
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: Cloud,
    subcategories: ['AWS', 'Azure', 'GCP', 'IBM Cloud', 'Oracle Cloud']
  },
  {
    id: 'security',
    title: 'Cyber Security',
    icon: Shield,
    subcategories: ['Network Security', 'Penetration Testing', 'Security Operations']
  },
  {
    id: 'data',
    title: 'Data and Database',
    icon: Database,
    subcategories: ['SQL', 'NoSQL', 'Big Data', 'Data Warehousing']
  },
  {
    id: 'devops',
    title: 'DevOps & DevSecOps',
    icon: Code,
    subcategories: ['CI/CD', 'Container Orchestration', 'Infrastructure as Code']
  },
  {
    id: 'network',
    title: 'Network Technologies',
    icon: Network,
    subcategories: ['Routing', 'Switching', 'SDN', 'Network Security']
  },
  {
    id: 'storage',
    title: 'Storage Technologies',
    icon: HardDrive,
    subcategories: ['SAN', 'NAS', 'Object Storage', 'Backup Solutions']
  },
  {
    id: 'virtualization',
    title: 'Virtualization',
    icon: Monitor,
    subcategories: ['VMware', 'Hyper-V', 'KVM', 'Container Technologies']
  },
  {
    id: 'telecom',
    title: 'Telecommunication',
    icon: Radio,
    subcategories: ['5G', 'VoIP', 'Network Protocols', 'Wireless Technologies']
  },
  {
    id: 'mainframe',
    title: 'Mainframe',
    icon: Terminal,
    subcategories: ['z/OS', 'COBOL', 'JCL', 'DB2']
  },
  {
    id: 'itsm',
    title: 'IT Service Management',
    icon: Boxes,
    subcategories: ['ITIL', 'ServiceNow', 'BMC Remedy', 'Incident Management']
  },
  {
    id: 'quantum',
    title: 'Quantum Computing',
    icon: Atom,
    subcategories: ['Quantum Algorithms', 'Quantum Hardware', 'Quantum Software']
  }
];