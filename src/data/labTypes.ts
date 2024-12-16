import { 
  BookOpen, 
  Check, 
  Cloud, 
  Database, 
  Server, 
  Monitor, 
  Network, 
  Cpu, 
  MousePointer 
} from 'lucide-react';

export const labTypes = [
  {
    id: 'catalog',
    title: 'Lab Catalogues',
    icon: BookOpen,
    bulletIcon: Check,
    description: 'Pre-built lab environments with AI-recommended learning paths',
    features: [
      'Vast library of pre-configured lab environments',
      'AI-powered learning path recommendations',
      'Course-aligned lab exercises',
      'Structured learning progression',
      'Automated environment setup'
    ]
  },
  {
    id: 'cloud-vms',
    title: 'Cloud VMs',
    icon: Server,
    bulletIcon: Check,
    description: 'Web and RDP access to cloud-hosted virtual machines',
    features: [
      'Instant web/RDP access',
      'Pre-configured lab snapshots',
      'Hourly learning schedules',
      'Multi-platform support',
      'Automated resource management'
    ]
  },
  {
    id: 'cloud-slices',
    title: 'Cloud Slices',
    icon: Cloud,
    bulletIcon: Check,
    description: 'Managed cloud accounts with controlled access and budgets',
    features: [
      'AI-managed cloud services',
      'Capped resource access',
      'Preset cost limits',
      'AI-optimized resource selection',
      'Maximum learning coverage'
    ]
  },
  {
    id: 'dedicated-vms',
    title: 'Dedicated VMs',
    icon: Monitor,
    bulletIcon: Check,
    description: 'Dedicated virtual machines with nested virtualization',
    features: [
      '24/7 environment access',
      'Full administrative control',
      'Nested virtualization support',
      'Custom configuration options',
      'Ideal for workshops'
    ]
  },
  {
    id: 'clustered',
    title: 'Clustered VM Labs',
    icon: Database,
    bulletIcon: Check,
    description: 'Multi-machine lab environments for complex scenarios',
    features: [
      'Consistent IP addressing',
      'Isolated lab environments',
      'Multiple virtual appliances',
      'Complex infrastructure simulation',
      'Enterprise-grade networking'
    ]
  },
  {
    id: 'emulators',
    title: 'Environment Emulators',
    icon: Network,
    bulletIcon: Check,
    description: 'Hosted network and telecom emulation platforms',
    features: [
      'EVE-NG environment access',
      'PnetLabs integration',
      'GNS3 lab environments',
      'NetSIM capabilities',
      'Pre-built networking labs'
    ]
  },
  {
    id: 'hardware',
    title: 'Real Hardware Labs',
    icon: Cpu,
    bulletIcon: Check,
    description: 'Physical hardware access for hands-on experience',
    features: [
      'Wireless networking equipment',
      'Storage systems',
      'Network devices',
      'Datacenter hardware',
      'Remote hardware access'
    ]
  },
  {
    id: 'guided-demo',
    title: 'Click Through Labs',
    icon: MousePointer,
    bulletIcon: Check,
    description: 'Guided demonstrations for niche technologies',
    features: [
      'Interactive walkthroughs',
      'Step-by-step guidance',
      'Product demonstrations',
      'Scenario-based learning',
      'Immediate feedback'
    ]
  }
];