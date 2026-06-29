export const SITE_CONFIG = {
  name: "Sunrise Structural",
  tagline: "Engineering & Training",
  email: "structuralsunrise@gmail.com",
  phone: "058-633 0155",
  whatsapp: "971586330155",
  address: "AL MAJAZ,AL BUHEIRA CORNICHE STREET OFFICE 1206 AL BATHA TOWER,SHARJAH,UAE",
  copyright: "© 2026 Sunrise Structural. All rights reserved.",
} as const;

export const SOCIAL_LINKS = [
  {
    icon: "ti-brand-facebook",
    href: "#",
    label: "Facebook",
  },
  { icon: "ti-brand-twitter", href: "", label: "Twitter" },
  {
    icon: "ti-brand-instagram",
    href: "#",
    label: "Instagram",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const HERO_CONTENT = {
  eyebrow: "Education × Projects",
  titleStart: "We empower learners with real expertise,",
  titleAccent: "practical",
  titleEnd: "projects and proven results.",
  description:
    "Our dedicated team will help you to sort out all the technical issues which may affect your business or project. We have been in the industry for training for the last 23 years.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "Our Services", href: "/services" },
  backgroundImage: "/images/hero-bg.png",
} as const;

export const ABOUT_CONTENT = {
  eyebrow: "Let's Move Forward",
  title: "23 Years Of Undefeated Success",
  paragraph1:
    "Our services started in 1999 as a Architectural Education company. We do corporate and provide Individual Training for Engineers and Managers.",
  paragraph2:
    "We have completed local and International projects in various sectors. Especially in BIM (Revit – Architecture / Structure / MEP, Navisworks Manage, BIM 360 and BIM Collaborative Pro), As built AutoCAD, Electrical Designing, MEP and Interior Designing.",
} as const;

export const STATS = [
  {
    value: 512,
    suffix: "+",
    label: "Successfully Training / Project Finished.",
    icon: "ti-briefcase",
  },
  {
    value: 23,
    suffix: "+",
    label: "Years of experience with proud",
    icon: "ti-award",
  },
  {
    value: 5,
    suffix: "",
    label: "Country Establishment & more to be established",
    icon: "ti-world",
  },
  {
    value: 900,
    suffix: "+",
    label: "Colleagues & counting more daily",
    icon: "ti-users",
  },
] as const;

export const SERVICES = [
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    title: "Computer Programming Courses",
    description:
      "Specialized training in C, C++, Java, Python, and more coding languages.",
    features: ["C / C++", "Java", "Python", "Web Development", "And More"],
    icon: "ti-code",
    category: "Coding",
    isCore: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Professional Courses",
    description:
      "Engineering software training — Revit, AutoCAD, 3DS Max, and BIM from scratch to advanced.",
    features: ["Revit", "AutoCAD", "3DS Max", "BIM 360", "And More"],
    icon: "ti-building-skyscraper",
    category: "BIM & CAD",
    isCore: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    title: "Consultancy",
    description:
      "End-to-end project design and delivery — concept to completion on time.",
    features: [
      "Project Planning",
      "Design Review",
      "Site Supervision",
      "Delivery Management",
      "And More",
    ],
    icon: "ti-briefcase",
    category: "Advisory",
    isCore: true,
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Architecture",
    description:
      "Our architects visit your premises and deliver the best aesthetic solution.",
    features: [
      "Site Visit",
      "3D Modeling",
      "Interior Design",
      "Exterior Design",
      "And More",
    ],
    icon: "ti-ruler-measure",
    category: "Design",
    isCore: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Safety Service Courses",
    description:
      "Building safety equipment, engineers, and labour to keep your site compliant.",
    features: [
      "Safety Audit",
      "PPE Supply",
      "Trained Engineers",
      "Compliance Reports",
      "And More",
    ],
    icon: "ti-shield-check",
    category: "Safety",
    isCore: false,
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    title: "Computer Hardware Training",
    description:
      "Computer Software & Hardware courses for Corporates and Individuals.",
    features: [
      "Software Training",
      "PC Hardware Upgrade",
      "Complete Computer Setup",
      "Custom Build",
      "And More",
    ],
    icon: "ti-cpu",
    category: "Hardware",
    isCore: false,
  },
] as const;

export const SUSTAINABILITY_CONTENT = {
  eyebrow: "Why Choose Us",
  title: "Why Sunrise Structural ?",
  subtitle: "",
  highlights: [
    { icon: "ti-recycle", label: "Sustainability" },
    { icon: "ti-clock", label: "Project On Time" },
    { icon: "ti-device-desktop", label: "Modern Technology" },
    { icon: "ti-tools", label: "Latest Designs" },
  ],
  features: [
    {
      icon: "ti-school",
      title: "Develop & Training",
      description:
        "Hands-on practical training led by industry experts using real-world projects and the latest engineering software.",
    },
    {
      icon: "ti-briefcase",
      title: "Job Placement",
      description:
        "Strong industry connections and dedicated placement support to help every student land their dream role.",
    },
    {
      icon: "ti-clipboard-check",
      title: "Test & Interview",
      description:
        "Mock interviews, technical assessments, and portfolio reviews to fully prepare you for the hiring process.",
    },
    {
      icon: "ti-user-check",
      title: "Career Counselling",
      description:
        "One-on-one mentorship and personalized guidance to map out your ideal career path in engineering.",
    },
  ],
} as const;

export const SUSTAINABILITY_BADGES = [
  { icon: "ti-leaf", label: "Eco-conscious engineering" },
  { icon: "ti-clock-check", label: "Delivered on time, every time" },
  { icon: "ti-cpu", label: "Modern technology driven" },
  { icon: "ti-users", label: "People-first approach" },
] as const;

export const TESTIMONIALS = [
  {
    initials: "AR",
    name: "Arun Raj",
    role: "B.Tech Civil Engineering",
    company: "NIT Calicut",
    quote:
      "I joined the BIM course not knowing what to expect. Three months later I had a job offer before I even graduated. The hands-on Revit sessions and live project exposure made all the difference.",
    rating: 5,
  },
  {
    initials: "PN",
    name: "Priya Nambiar",
    role: "M.Tech Structural Engineering",
    company: "TKM College of Engineering",
    quote:
      "Honestly I was skeptical at first. But the way they teach structural modelling with real Kerala project examples just clicked for me. Got my internship at a top Kochi firm within weeks of completing the course.",
    rating: 5,
  },
  {
    initials: "SK",
    name: "Sreejith Kumar",
    role: "Diploma in Civil Engineering",
    company: "Govt. Polytechnic Thrissur",
    quote:
      "Coming from a diploma background I was worried I would struggle to keep up. The instructors were incredibly patient and made sure no one was left behind. Now I am working as a BIM modeller and loving it.",
    rating: 5,
  },
  {
    initials: "FA",
    name: "Fathima Ashraf",
    role: "B.Arch Final Year",
    company: "School of Architecture Trivandrum",
    quote:
      "As an architecture student I always thought BIM was only for engineers. This course completely changed that. I now coordinate models across disciplines and my thesis project quality went up by miles.",
    rating: 5,
  },
  {
    initials: "MJ",
    name: "Mohammed Jasim",
    role: "Civil Engineering Graduate",
    company: "MES College of Engineering",
    quote:
      "The placement support here is real, not just a promise. They helped me build my portfolio, prepared me for interviews, and followed up even after I got placed. Feels like they genuinely care about your career.",
    rating: 5,
  },
  {
    initials: "DS",
    name: "Devika Suresh",
    role: "M.Tech Construction Management",
    company: "CUSAT",
    quote:
      "I had already done two online BIM courses before this one. None of them compared. The live project workflow, clash detection sessions, and mentor feedback were on a completely different level.",
    rating: 5,
  },
  {
    initials: "RR",
    name: "Rohit Ramachandran",
    role: "B.Tech Civil Engineering",
    company: "College of Engineering Trivandrum",
    quote:
      "Weekend batches worked perfectly around my college schedule. Six months ago I had zero knowledge of Revit. Today I am freelancing for a structural firm in Calicut while finishing my final semester.",
    rating: 5,
  },
  {
    initials: "AT",
    name: "Anjali Thomas",
    role: "Fresh Civil Engineering Graduate",
    company: "Rajagiri School of Engineering",
    quote:
      "Every session felt practical and grounded. No boring theory slides — just real models, real problems, and real solutions. I walked into my first job interview confident and walked out with an offer.",
    rating: 5,
  },
] as const;
