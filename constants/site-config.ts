export const SITE_CONFIG = {
  name: "Sunrise Structural",
  tagline: "Engineering & Training",
  email: "structuralsunrise@gmail.com",
  phone: "058-633 0155",
  whatsapp: "971586330155", // UAE country code (971) + number without leading 0
  address: "Business Bay, Dubai, United Arab Emirates",
  hours: {
    weekdays: "Mon – Fri: 9:00 AM – 6:00 PM",
    saturday: "Saturday: 10:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
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
  {
    icon: "ti-brand-linkedin",
    href: "#",
    label: "LinkedIn",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const HERO_CONTENT = {
  eyebrow: "Let's Move Forward",
  titlePart1: "EDUCATION",
  titlePart2: "PROJECTS",
  description:
    "Our dedicated team will help you to sort out all the technical issues which may affect your business or project. We have been in the industry for training for the last 23 years. We have 100+ dedicated Engineers and Project Managers to complete the Project(s).",
  ctaLabel: "Contact Us",
  ctaHref: "#contact",
  backgroundImage: "/images/hero-bg.png",
} as const;

export const ABOUT_CONTENT = {
  eyebrow: "Let's Move Forward",
  title: "23 Years Of Undefeated Success",
  paragraph1:
    "Our services started in 1999 as a CAD Education company. We do corporate and Individual Training for Engineers and Managers.",
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
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    title: "Computer Training",
    description:
      "Computer Software & Hardware courses for Corporates and Individuals.",
    features: [
      "Software Training",
      "PC Hardware Upgrade",
      "Complete Computer Setup",
      "Custom Build",
      "And More",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    title: "Computer Programming",
    description:
      "Specialized training in C, C++, Java, Python, and more coding languages.",
    features: ["C / C++", "Java", "Python", "Web Development", "And More"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    title: "Professional Courses",
    description:
      "Engineering software training — Revit, AutoCAD, 3DS Max, and BIM from scratch to advanced.",
    features: ["Revit", "AutoCAD", "3DS Max", "BIM 360", "And More"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=800&q=80",
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
  },
  {
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80",
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
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    title: "Safety Service",
    description:
      "Building safety equipment, engineers, and labour to keep your site compliant.",
    features: [
      "Safety Audit",
      "PPE Supply",
      "Trained Engineers",
      "Compliance Reports",
      "And More",
    ],
  },
] as const;

export const SUSTAINABILITY_CONTENT = {
  left: {
    eyebrow: "Sustainability",
    title: "Committed To Keep People Healthy & Safe",
    ctaLabel: "Get In Touch",
    ctaHref: "#contact",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  right: {
    title: "We Follow Best Practices",
    subtitle:
      "We are always challenging ourselves to get the best in the industry.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    practices: [
      { icon: "ti-recycle", label: "Sustainability" },
      { icon: "ti-clock", label: "Project On Time" },
      { icon: "ti-device-desktop", label: "Modern Technology" },
      { icon: "ti-tools", label: "Latest Designs" },
    ],
  },
} as const;

export const SUSTAINABILITY_BADGES = [
  { icon: "ti-leaf", label: "Eco-conscious engineering" },
  { icon: "ti-clock-check", label: "Delivered on time, every time" },
  { icon: "ti-cpu", label: "Modern technology driven" },
  { icon: "ti-users", label: "People-first approach" },
] as const;

export const TESTIMONIALS = [
  {
    initials: "LH",
    name: "Liz Haward",
    role: "Engineering Manager",
    company: "Skyline Constructions",
    quote:
      "Best decision I made was approaching Sunrise Structural for my upcoming project. The team delivered beyond expectations with precision and professionalism.",
    rating: 5,
  },
  {
    initials: "MM",
    name: "Mitchell Mariaan",
    role: "Interior Designer",
    company: "Mariaan Studio",
    quote:
      "I was amazed at how efficiently the team handled my project. Professional, fast, and results-driven from concept to completion.",
    rating: 5,
  },
  {
    initials: "AS",
    name: "Ann Smith",
    role: "Project Manager",
    company: "Urban Build Co.",
    quote:
      "Sunrise Structural provided the best team for my project. On-time, on-budget, and the quality of work was simply outstanding.",
    rating: 5,
  },
  {
    initials: "RK",
    name: "Rahul Khanna",
    role: "Civil Engineer",
    company: "Infra Solutions",
    quote:
      "Their BIM training transformed my career. The instructors are industry experts with deep real-world experience and patience.",
    rating: 5,
  },
  {
    initials: "SP",
    name: "Sarah Peterson",
    role: "Senior Architect",
    company: "Peterson Designs",
    quote:
      "Outstanding consultancy work. They turned our complex project into a smooth, well-managed journey from start to finish.",
    rating: 5,
  },
  {
    initials: "JM",
    name: "James Miller",
    role: "Construction Lead",
    company: "Miller & Sons",
    quote:
      "Reliable, skilled, and detail-oriented. The safety services they provided kept our site running smoothly without a single incident.",
    rating: 5,
  },
] as const;
