export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/gi, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
};

export const courseCategories = [
  {
    name: 'Cisco',
    path: '/cisco',
    subcourses: [
      'CCNA (Cisco Certified Network Associate)',
      'CCNP (Cisco Certified Network Professional)', 
      'CCIE (Cisco Certified Internetwork Expert)',
      'Cisco CyberOps Associate',
      'Cisco DevNet Associate',
      'Cisco Wireless / Collaboration'
    ]
  },
  {
    name: 'Microsoft',
    path: '/microsoft',
    subcourses: [
      'Microsoft Azure (AZ-900, AZ-104, AZ-305)',
      'Microsoft 365 (MS-900, MS-101)',
      'Microsoft Security (SC-900, SC-200)',
      'Windows Server Administration',
      'Power Platform (PL-900, PL-100)',
      'Dynamics 365 (MB-900)'
    ]
  },
  {
    name: 'AWS',
    path: '/aws',
    subcourses: [
      'AWS Cloud Practitioner (CLF-C02)',
      'AWS Solutions Architect (SAA-C03)',
      'AWS Developer Associate',
      'AWS SysOps Administrator',
      'AWS DevOps Engineer',
      'AWS Security Specialty'
    ]
  },
  {
    name: 'CompTIA',
    path: '/comptia',
    subcourses: [
      'CompTIA A+',
      'CompTIA Network+',
      'CompTIA Security+',
      'CompTIA CySA+ (Cybersecurity Analyst)',
      'CompTIA PenTest+',
      'CompTIA CASP+',
      'CompTIA Cloud+'
    ]
  },
  {
    name: 'VMware',
    path: '/vmware',
    subcourses: [
      'VMware vSphere (VCP-DCV)',
      'VMware NSX-T (VCP-NV)',
      'VMware Horizon (VCP-DTM)',
      'VMware Cloud on AWS',
      'VMware vSAN'
    ]
  },
  {
    name: 'Google',
    path: '/google',
    subcourses: [
      'Google Cloud Digital Leader',
      'Google Associate Cloud Engineer',
      'Google Professional Cloud Architect',
      'Google Professional Data Engineer',
      'Google Workspace Administrator'
    ]
  },
  {
    name: 'Oracle',
    path: '/oracle',
    subcourses: [
      'Oracle Cloud Infrastructure (OCI Foundations)',
      'Oracle Database SQL Certified Associate',
      'Oracle Java Certification (OCA, OCP)',
      'Oracle E-Business Suite',
      'Oracle Autonomous Database'
    ]
  },
  {
    name: 'PMI',
    path: '/pmi',
    subcourses: [
      'PMP (Project Management Professional)',
      'CAPM (Certified Associate in Project Management)',
      'PMI-ACP (Agile Certified Practitioner)',
      'PMI-RMP (Risk Management Professional)'
    ]
  },
  {
    name: 'ISACA',
    path: '/isaca',
    subcourses: [
      'CISA (Certified Information Systems Auditor)',
      'CISM (Certified Information Security Manager)',
      'CRISC (Certified in Risk and Information Systems Control)',
      'CGEIT (Certified in the Governance of Enterprise IT)'
    ]
  },
  {
    name: 'Fortinet',
    path: '/fortinet',
    subcourses: [
      'NSE 1 to NSE 8 (Network Security Expert)',
      'FortiGate Firewall Training',
      'Fortinet SD-WAN',
      'Fortinet Secure Access'
    ]
  },
  {
    name: 'IIA',
    path: '/iia',
    subcourses: [
      'CIA (Certified Internal Auditor)',
      'CRMA (Certification in Risk Management Assurance)',
      'QIAL (Qualification in Internal Audit Leadership)'
    ]
  },
  {
    name: 'Snowflake',
    path: '/snowflake',
    subcourses: [
      'Snowflake SnowPro Core Certification',
      'Snowflake Advanced Architect',
      'Snowflake Data Engineer',
      'Snowflake Administrator',
      'Snowflake Business Intelligence Integration'
    ]
  },
  {
    name: 'EC-Council',
    path: '/ec-council',
    subcourses: [
      'CEH (Certified Ethical Hacker)',
      'CHFI (Computer Hacking Forensic Investigator)',
      'ECSA (EC-Council Certified Security Analyst)',
      'ECIH (EC-Council Incident Handler)',
      'CEI (Certified Encryption Specialist)'
    ]
  },
  {
    name: 'ITIL',
    path: '/itil',
    subcourses: [
      'ITIL 4 Foundation',
      'ITIL 4 Managing Professional',
      'ITIL 4 Strategic Leader',
      'ITIL 4 Master',
      'ITIL Service Management'
    ]
  },
  {
    name: 'Prince2',
    path: '/prince2',
    subcourses: [
      'PRINCE2 Foundation',
      'PRINCE2 Practitioner',
      'PRINCE2 Agile Foundation',
      'PRINCE2 Agile Practitioner'
    ]
  },
  {
    name: 'Juniper',
    path: '/juniper',
    subcourses: [
      'JNCIA (Junos Associate)',
      'JNCIS (Junos Specialist)',
      'JNCIP (Junos Professional)',
      'JNCIE (Junos Expert)',
      'Juniper Security'
    ]
  },
  {
    name: 'Salesforce',
    path: '/salesforce',
    subcourses: [
      'Salesforce Administrator',
      'Salesforce Advanced Administrator',
      'Salesforce Platform Developer',
      'Salesforce App Builder',
      'Salesforce Marketing Cloud'
    ]
  },
  {
    name: 'ServiceNow',
    path: '/servicenow',
    subcourses: [
      'ServiceNow System Administrator',
      'ServiceNow Application Developer',
      'ServiceNow Implementation Specialist',
      'ServiceNow Certified Master Architect'
    ]
  },
  {
    name: 'Scrum',
    path: '/scrum',
    subcourses: [
      'Certified ScrumMaster (CSM)',
      'Certified Scrum Product Owner (CSPO)',
      'Advanced Certified ScrumMaster (A-CSM)',
      'Certified Scrum Developer (CSD)',
      'Professional Scrum Master (PSM)'
    ]
  },
  {
    name: 'Six Sigma',
    path: '/six-sigma',
    subcourses: [
      'Six Sigma White Belt',
      'Six Sigma Yellow Belt',
      'Six Sigma Green Belt',
      'Six Sigma Black Belt',
      'Six Sigma Master Black Belt'
    ]
  },
  {
    name: 'IBM',
    path: '/ibm',
    subcourses: [
      'IBM Cloud',
      'IBM Watson',
      'IBM Security',
      'IBM Data Science',
      'IBM DevOps'
    ]
  },
  {
    name: 'SAP',
    path: '/sap',
    subcourses: [
      'SAP S/4HANA',
      'SAP FICO',
      'SAP MM',
      'SAP SD',
      'SAP ABAP'
    ]
  },
  {
    name: 'Splunk',
    path: '/splunk',
    subcourses: [
      'Splunk Core Certified User',
      'Splunk Core Certified Power User',
      'Splunk Enterprise Certified Admin',
      'Splunk Enterprise Certified Architect'
    ]
  },
  {
    name: 'Palo Alto',
    path: '/palo-alto',
    subcourses: [
      'PCNSA (Palo Alto Networks Certified Network Security Administrator)',
      'PCNSE (Palo Alto Networks Certified Network Security Engineer)',
      'PCCSA (Palo Alto Networks Certified Cybersecurity Associate)',
      'PCCSE (Palo Alto Networks Certified Cybersecurity Engineer)'
    ]
  },
  {
    name: 'Kubernetes',
    path: '/kubernetes',
    subcourses: [
      'CKA (Certified Kubernetes Administrator)',
      'CKAD (Certified Kubernetes Application Developer)',
      'CKS (Certified Kubernetes Security Specialist)'
    ]
  },
  {
    name: 'TOGAF',
    path: '/togaf',
    subcourses: [
      'TOGAF 9 Foundation',
      'TOGAF 9 Certified',
      'TOGAF Enterprise Architecture'
    ]
  },
  {
    name: 'DevOps',
    path: '/devops',
    subcourses: [
      'DevOps Foundation',
      'DevOps Leader',
      'DevOps Engineering',
      'Site Reliability Engineering'
    ]
  },
  {
    name: 'ISTQB',
    path: '/istqb',
    subcourses: [
      'ISTQB Foundation Level',
      'ISTQB Advanced Level',
      'ISTQB Expert Level',
      'ISTQB Agile Testing'
    ]
  },
  {
    name: 'IIBA',
    path: '/iiba',
    subcourses: [
      'CBAP (Certified Business Analysis Professional)',
      'CCBA (Certification of Competency in Business Analysis)',
      'ECBA (Entry Certificate in Business Analysis)',
      'CBDA (Certified Business Data Analyst)'
    ]
  }
];