import type { InsightPost, NavItem, ProcessStep, Service, WhyChooseUsItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" }
];

export const homeCoreServices: Service[] = [
  {
    title: "Election Strategy & Campaign Architecture",
    description:
      "Constituency-first planning from profiling and positioning to final election-day command models."
  },
  {
    title: "Data & Political Intelligence",
    description:
      "Booth-level analytics, segmentation and predictive insight engines for evidence-based decisions."
  },
  {
    title: "Ground Operations & Cadre Structuring",
    description:
      "Volunteer structuring, field discipline and booth networks that sustain voter outreach at scale."
  },
  {
    title: "Media & Narrative Management",
    description:
      "Message framing, crisis response and proactive media alignment to protect campaign momentum."
  },
  {
    title: "Digital & Social Media War Room",
    description:
      "Real-time listening, targeted communication and rapid response across social platforms."
  }
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Data-backed decision making",
    description: "Every move is driven by hard evidence and booth-level analytics, not just intuition.",
    iconName: "Database"
  },
  {
    title: "Constituency-level micro strategy",
    description: "Hyper-local planning that addresses specific regional dynamics and voter concerns.",
    iconName: "Map"
  },
  {
    title: "Integrated on-ground and digital approach",
    description: "Seamless synchronization between field operations and digital narrative control.",
    iconName: "Globe"
  },
  {
    title: "Confidential and high-trust operations",
    description: "Professional discretion and secure workflows for high-stakes political consulting.",
    iconName: "ShieldCheck"
  },
  {
    title: "Result-oriented execution framework",
    description: "Structured monitoring and adaptive response models to ensure campaign milestones.",
    iconName: "TrendingUp"
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Research",
    details: "Constituency mapping, voter analysis and competitor audit."
  },
  {
    title: "Strategy",
    details: "Positioning architecture and campaign roadmap design."
  },
  {
    title: "Narrative",
    details: "Message framing and perception shaping for key voter groups."
  },
  {
    title: "Mobilisation",
    details: "Coordinated field and digital execution models."
  },
  {
    title: "Monitoring",
    details: "Real-time intelligence and adaptive response protocols."
  },
  {
    title: "Victory",
    details: "Structured election-day management and review systems."
  }
];

export const servicesDetailed: Service[] = [
  {
    title: "Election Strategy & Campaign Planning",
    description:
      "Comprehensive electoral roadmaps built around constituency dynamics and candidate positioning.",
    bullets: [
      "SWOT analysis",
      "Constituency profiling",
      "Demographic mapping",
      "Opponent strategy audit",
      "Positioning framework"
    ]
  },
  {
    title: "Political Data & Analytics",
    description:
      "Structured intelligence pipelines that convert field data into clear strategic action.",
    bullets: [
      "Booth-level voter analysis",
      "Survey design and execution",
      "Sentiment tracking",
      "Issue mapping",
      "Predictive modelling"
    ]
  },
  {
    title: "Ground Operations & Cadre Structuring",
    description:
      "Disciplined organisation systems that strengthen local presence and outreach reliability.",
    bullets: [
      "Booth committee structuring",
      "Volunteer mobilisation",
      "Voter outreach programs",
      "Door-to-door campaign design",
      "Field monitoring systems"
    ]
  },
  {
    title: "Media & Narrative Management",
    description:
      "Narrative engineering that aligns public communication with campaign objectives.",
    bullets: [
      "Strategic message framing",
      "Press and media coordination",
      "Crisis communication",
      "Speech writing and talking points",
      "Political content development"
    ]
  },
  {
    title: "Digital & Social Media Campaigns",
    description:
      "Digital-first outreach frameworks to build visibility and influence voter perception.",
    bullets: [
      "Social media strategy",
      "Content calendar development",
      "Paid campaign management",
      "Influencer outreach",
      "War room monitoring and response"
    ]
  },
  {
    title: "Election Day Management",
    description:
      "Operational discipline for polling day execution and rapid issue escalation.",
    bullets: [
      "Booth agent coordination",
      "GOTV strategy",
      "Real-time reporting systems",
      "Issue escalation protocols"
    ]
  }
];

export const caseStudies = [
  {
    title: "Assembly Campaign - South India",
    challenge: "Weak booth structure and fragmented messaging",
    approach:
      "Data-driven voter segmentation with unified narrative positioning across local clusters.",
    outcome: "Increased vote share and a stronger grassroots volunteer network.",
    image: "/images/booth-management.png"
  },
  {
    title: "Parliamentary Campaign - Regional Party",
    challenge: "Urban perception gap",
    approach: "Digital-first communication with constituency-level targeted outreach.",
    outcome: "Higher public engagement and improved candidate visibility.",
    image: "/images/political-street.png"
  }
];

export const insightCategories = [
  "All",
  "Elections",
  "Data",
  "Campaign Strategy",
  "Crisis Management"
];

export const insightPosts: InsightPost[] = [
  {
    title: "Emerging Electoral Trends in Urban Constituencies",
    category: "Elections",
    excerpt:
      "How demographic shifts and voter issue-priorities are redefining modern constituency playbooks.",
    date: "Feb 2026",
    image: "/images/political-street.png"
  },
  {
    title: "Role of Data Intelligence in Campaign Decision Cycles",
    category: "Data",
    excerpt:
      "A practical model for integrating survey, booth and sentiment inputs into weekly strategy reviews.",
    date: "Jan 2026",
    image: "/images/strategy-board.jpg"
  },
  {
    title: "Managing Political Crisis During Election Windows",
    category: "Crisis Management",
    excerpt:
      "Frameworks for response speed, narrative control and stakeholder alignment under pressure.",
    date: "Dec 2025",
    image: "/images/media-room-abstract.png"
  },
  {
    title: "Constituency-Level Strategic Planning That Scales",
    category: "Campaign Strategy",
    excerpt:
      "Building a repeatable campaign architecture from booth realities to state-level messaging.",
    date: "Nov 2025",
    image: "/images/parliament.jpg"
  },
  {
    title: "Booth Management as the Margin Driver",
    category: "Elections",
    excerpt:
      "Why disciplined booth operations often determine outcomes in close multi-corner contests.",
    date: "Oct 2025",
    image: "/images/booth-management.png"
  },
  {
    title: "From Sentiment to Narrative: Closing the Feedback Loop",
    category: "Campaign Strategy",
    excerpt:
      "Turning field intelligence into coherent communication without message drift.",
    date: "Sep 2025",
    image: "/images/hyderabad-charminar.jpg"
  }
];

export const values = [
  {
    title: "Integrity",
    description: "Ethical campaign frameworks that sustain trust and credibility."
  },
  {
    title: "Confidentiality",
    description: "High-discretion advisory models and secure engagement practices."
  },
  {
    title: "Precision",
    description: "Micro-level strategy execution with measurable checkpoints."
  },
  {
    title: "Discipline",
    description: "Structured planning, governance and monitoring across campaign phases."
  },
  {
    title: "Impact",
    description: "Outcome-focused execution built around electoral results."
  }
];
