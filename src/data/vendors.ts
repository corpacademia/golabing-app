import { Cloud, Server, Network, Shield, Database, Code, Box, Cpu } from 'lucide-react';

export const vendors = [
  {
    id: 'ibm',
    name: 'IBM Cloud',
    icon: Cloud,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    products: [
      'IBM Cloud Platform',
      'Watson AI Services',
      'IBM Cloud Paks',
      'Red Hat OpenShift'
    ]
  },
  {
    id: 'aws',
    name: 'Amazon Web Services',
    icon: Cloud,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    products: [
      'EC2',
      'S3',
      'Lambda',
      'RDS'
    ]
  },
  {
    id: 'gcp',
    name: 'Google Cloud Platform',
    icon: Cloud,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
    products: [
      'Compute Engine',
      'BigQuery',
      'Kubernetes Engine',
      'Cloud Functions'
    ]
  },
  {
    id: 'azure',
    name: 'Microsoft Azure',
    icon: Cloud,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg',
    products: [
      'Azure VMs',
      'Azure Functions',
      'Azure DevOps',
      'Azure AD'
    ]
  },
  {
    id: 'oracle',
    name: 'Oracle Cloud',
    icon: Cloud,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
    products: [
      'OCI Compute',
      'Autonomous Database',
      'Container Engine',
      'Oracle Analytics'
    ]
  },
  {
    id: 'vmware',
    name: 'VMware',
    icon: Server,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg',
    products: [
      'vSphere',
      'NSX',
      'vSAN',
      'Tanzu'
    ]
  },
  {
    id: 'redhat',
    name: 'Red Hat',
    icon: Server,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg',
    products: [
      'RHEL',
      'OpenShift',
      'Ansible',
      'OpenStack'
    ]
  },
  {
    id: 'hpe',
    name: 'HPE',
    icon: Server,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Hewlett_Packard_Enterprise_logo.svg',
    products: [
      'ProLiant Servers',
      'SimpliVity',
      'Nimble Storage',
      'Aruba Networks'
    ]
  },
  {
    id: 'dell',
    name: 'Dell',
    icon: Server,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg',
    products: [
      'PowerEdge Servers',
      'VxRail',
      'PowerStore',
      'Data Protection'
    ]
  },
  {
    id: 'cisco',
    name: 'Cisco',
    icon: Network,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg',
    products: [
      'Networking',
      'Security',
      'Collaboration',
      'Data Center'
    ]
  },
  {
    id: 'juniper',
    name: 'Juniper',
    icon: Network,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Juniper_Networks_logo.svg',
    products: [
      'Routing',
      'Switching',
      'Security',
      'SD-WAN'
    ]
  },
  {
    id: 'fortinet',
    name: 'Fortinet',
    icon: Shield,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Fortinet_logo.svg',
    products: [
      'FortiGate',
      'FortiManager',
      'FortiAnalyzer',
      'FortiSIEM'
    ]
  },
  {
    id: 'paloalto',
    name: 'Palo Alto Networks',
    icon: Shield,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/PaloAltoNetworks_2020_Logo.svg',
    products: [
      'Next-Gen Firewall',
      'Prisma Cloud',
      'Cortex XDR',
      'Prisma Access'
    ]
  },
  {
    id: 'sap',
    name: 'SAP',
    icon: Database,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg',
    products: [
      'S/4HANA',
      'Business One',
      'SuccessFactors',
      'Business Objects'
    ]
  },
  {
    id: 'nutanix',
    name: 'Nutanix',
    icon: Box,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Nutanix_Logo.svg',
    products: [
      'AHV',
      'Files',
      'Flow',
      'Prism'
    ]
  },
  {
    id: 'checkpoint',
    name: 'Check Point',
    icon: Shield,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Check_Point_logo_2022.svg',
    products: [
      'Security Gateway',
      'CloudGuard',
      'Harmony',
      'Quantum'
    ]
  }
];