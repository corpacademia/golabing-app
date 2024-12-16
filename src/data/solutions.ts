import { User, Building, GraduationCap, Building2 } from 'lucide-react';

export const solutions = [
  {
    id: 'individual',
    title: 'Individual Learners',
    description: 'Perfect for self-paced learning and skill development',
    icon: User,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Access to prebuilt lab catalogues',
      'AI-powered learning path recommendations',
      'Budget-friendly cloud accounts',
      'Comprehensive progress tracking',
      'Hands-on skill assessment',
      'Pay-as-you-go pricing'
    ]
  },
  {
    id: 'training',
    title: 'Training Companies',
    description: 'Empower your training business with our white-label solution',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600',
    features: [
      'White-labeled training portal',
      'Affiliate reselling benefits',
      'Custom lab creation with AI assistance',
      'Student enrollment management',
      'Revenue tracking dashboard',
      'Administrative controls'
    ]
  },
  {
    id: 'education',
    title: 'Educational Institutes',
    description: 'Transform your IT education programs',
    icon: GraduationCap,
    image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Academic lab provisioning',
      'Customized learning paths',
      'Budget-controlled environments',
      'Progress monitoring',
      'Tutor/admin accounts',
      'Flexible student plans'
    ]
  },
  {
    id: 'enterprise',
    title: 'Large Enterprise',
    description: 'Complete control and customization for your organization',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600',
    features: [
      'White-labeled solution',
      'Custom domain integration',
      'Private cloud support',
      'On-premises deployment option',
      'Custom lab creation',
      'Enterprise-grade admin dashboard'
    ]
  }
];