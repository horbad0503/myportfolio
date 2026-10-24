/* =========================================================
   Ayokunle Obadare — Portfolio Data
   Full-Stack Developer & Cybersecurity Analyst
   ========================================================= */

export const profile = {
  name: "Ayokunle Obadare",
  firstName: "Ayokunle",
  lastName: "Obadare",
  handle: "ayokunle",
  role: "Full-Stack Developer & Cybersecurity Analyst",
  shortRole: "Full-Stack × CyberSec",
  tagline:
    "Award-winning Cybersecurity Engineer & Full-Stack Architect. Cisco CyberOps Certified.",
  bio: "Cybersecurity graduate from FUTA (Class of 2026). Blending elite threat intelligence with production-grade web ecosystems. 10+ live deployments, zero-trust advocate, and DevSecOps pioneer.",
  location: "Akure, Nigeria · Remote · Worldwide",
  phone: "+23470070290750",
  phoneDisplay: "+234 700 702 90750",
  email: "obaday0503@gmail.com",
  cv: "/CV.pdf",
  cvWord: "/CV.docx",
  avatar: "/images/upwork-1.jpeg",
  heroBg: "/images/profile.jpeg",
  aboutBg: "/images/profile.jpeg",
  logo: "/logo.png",
};

/* ---------------------------------------------------------
   Socials — single source of truth for Footer, Contact, etc.
   NOTE: no Instagram per request.
   --------------------------------------------------------- */
export const socials = [
  {
    name: "GitHub",
    label: "@horbad0503",
    href: "https://github.com/horbad0503",
    icon: "github",
  },
  {
    name: "LinkedIn",
    label: "Ayokunle Obadare",
    href: "https://www.linkedin.com/in/ayokunle-obadare-078845236",
    icon: "linkedin",
  },
  {
    name: "X",
    label: "@LORDOBAD",
    href: "https://x.com/LORDOBAD",
    icon: "x",
  },
  {
    name: "Facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/1EtERccLtt/",
    icon: "facebook",
  },
];

/* ---------------------------------------------------------
   Newsletter endpoint (optional)
   Leave empty to run in "local mode" (saves to localStorage).
   Set to a Formspree / Getform / Basin URL to receive real emails.
   e.g. "https://formspree.io/f/xxxxxxxx"
   --------------------------------------------------------- */
export const SUBSCRIBE_ENDPOINT = "";

/* ---------------------------------------------------------
   Hero
   --------------------------------------------------------- */
export const heroTerminal = [
  { prompt: "whoami", output: "Ayokunle Obadare" },
  { prompt: "cat role.txt", output: "Full-Stack Developer & Cybersecurity Analyst" },
  { prompt: "cat stack.txt", output: "PHP · Laravel · React · Node.js · MySQL · Python" },
  {
    prompt: "./status --check",
    output: [
      "[●] AVAILABLE FOR NEW PROJECTS",
      "[●] CISCO CYBEROPS CERTIFIED",
      "[●] 10+ LIVE DEPLOYMENTS",
      "[●] 15+ VULNERABILITIES PATCHED",
    ],
  },
];

export const heroTyped = [
  "Full-Stack Developer",
  "Cybersecurity Analyst",
  "React Specialist",
  "Cisco CyberOps Certified",
];

export const heroStats = [
  { value: "10+", label: "Live Projects", icon: "Code2" },
  { value: "2", label: "Certifications", icon: "Award" },
  { value: "4+", label: "Years Experience", icon: "TrendingUp" },
  { value: "15+", label: "Vulnerabilities Patched", icon: "ShieldCheck" },
];

/* ---------------------------------------------------------
   About
   --------------------------------------------------------- */
export const aboutInfo = [
  {
    icon: "GraduationCap",
    label: "Education",
    value: "B.Tech Cybersecurity",
    sub: "FUTA · Class of 2026",
  },
  {
    icon: "Award",
    label: "Certifications",
    value: "Cisco CyberOps",
    sub: "Full Stack Dev · VoksInstitute",
  },
  {
    icon: "Briefcase",
    label: "Experience",
    value: "Qualitas Paints · IITA",
    sub: "2+ Years Combined",
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Akure, Nigeria",
    sub: "Remote · Worldwide",
  },
];

/* ---------------------------------------------------------
   Skills
   --------------------------------------------------------- */
export const devSkills = [
  { name: "PHP / Laravel", percent: 90, icon: "Code2" },
  { name: "JavaScript", percent: 88, icon: "Braces" },
  { name: "React / React Native", percent: 87, icon: "Atom" },
  { name: "Python", percent: 75, icon: "Terminal" },
  { name: "MySQL / Database", percent: 88, icon: "Database" },
];

export const securitySkills = [
  { name: "Vulnerability Assessment", percent: 92, icon: "Search" },
  { name: "Threat Detection", percent: 87, icon: "Activity" },
  { name: "Firewall / ACL", percent: 85, icon: "Flame" },
  { name: "Network Security", percent: 88, icon: "Network" },
];

/* ---------------------------------------------------------
   Featured Deployments (short list)
   --------------------------------------------------------- */
export const featuredDeployments = [
  { name: "QPaints", label: "Paint eCommerce", icon: "PaintBucket" },
  { name: "CRM System", label: "Customer Management", icon: "Users" },
  { name: "Grillz Website", label: "Custom Jewelry", icon: "Gem" },
  { name: "Missionary Church", label: "Non-profit", icon: "Church" },
  { name: "O-Shield", label: "Incident Response", icon: "ShieldCheck" },
  { name: "Trackway Logistics", label: "Logistics", icon: "Truck" },
  { name: "Boss Portfolio", label: "Portfolio", icon: "UserCircle" },
  { name: "Fingerprint System", label: "Attendance", icon: "Fingerprint" },
];

/* ---------------------------------------------------------
   Services
   --------------------------------------------------------- */
export const services = [
  {
    id: "01",
    title: "Full-Stack Development",
    description:
      "Modern, responsive web applications with security-first architecture and seamless user experiences. Built with Laravel, React, and cutting-edge technologies.",
    icon: "Code2",
    features: [
      "Laravel/PHP",
      "React/Vue.js",
      "RESTful APIs",
      "Database Design",
      "Cloud Deployment",
    ],
    featured: true,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: "02",
    title: "Cybersecurity Analysis",
    description:
      "Comprehensive security assessments, threat detection, and proactive defense strategies to protect your digital assets.",
    icon: "ShieldCheck",
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "SIEM Implementation",
      "Incident Response",
    ],
    span: "lg:row-span-2",
  },
  {
    id: "03",
    title: "Network Security",
    description:
      "Secure network architecture, firewall configuration, and traffic monitoring solutions for enterprise-level protection.",
    icon: "Network",
    features: ["Firewall", "VLAN", "IDS/IPS", "Packet Analysis"],
  },
  {
    id: "04",
    title: "DevSecOps",
    description:
      "Secure CI/CD pipelines, automated security testing, and continuous monitoring practices for rapid, safe deployments.",
    icon: "Infinity",
    features: ["CI/CD", "SAST/DAST", "Container Security", "IaC"],
  },
];

export const serviceDetails = {
  "01": {
    tagline: "End-to-end product engineering",
    overview:
      "I design and build full-stack applications from first schema to final deploy. Every project ships with security baked in from day one — not bolted on at the end.",
    deliverables: [
      "Custom web application (frontend + backend)",
      "Relational database design & migrations",
      "RESTful or GraphQL API layer",
      "Authentication & authorization system",
      "Admin dashboard / CMS",
      "Deployment to production (Vercel, Render, or VPS)",
      "Handover documentation & walkthrough",
    ],
    process: [
      { step: "01", title: "Discovery", detail: "Understand goals, users, and constraints." },
      { step: "02", title: "Architecture", detail: "Design schema, API, and UI wireframes." },
      { step: "03", title: "Build", detail: "Iterative development with weekly demos." },
      { step: "04", title: "Harden", detail: "Security review, testing, and optimization." },
      { step: "05", title: "Ship", detail: "Deploy, monitor, and hand over the keys." },
    ],
    stack: ["Laravel", "React", "Node.js", "MySQL", "Tailwind", "Vite", "PostgreSQL"],
    timeline: "4–12 weeks depending on scope",
  },
  "02": {
    tagline: "Know your attack surface before attackers do",
    overview:
      "I run structured security assessments that map out exactly how your systems can be breached — then I help you fix it. Reports are written for developers, not lawyers.",
    deliverables: [
      "Full asset & attack-surface inventory",
      "Vulnerability scan with CVSS scoring",
      "Manual penetration testing (web + network)",
      "Proof-of-concept exploits where applicable",
      "Prioritized remediation roadmap",
      "Re-testing after fixes are applied",
      "Executive summary + technical report",
    ],
    process: [
      { step: "01", title: "Scoping", detail: "Define targets, rules of engagement, and success criteria." },
      { step: "02", title: "Recon", detail: "Passive and active footprinting of the target." },
      { step: "03", title: "Assess", detail: "Automated scanning + manual exploitation." },
      { step: "04", title: "Report", detail: "Findings with severity, impact, and fix guidance." },
      { step: "05", title: "Verify", detail: "Re-test to confirm fixes hold." },
    ],
    stack: ["Burp Suite", "Nmap", "Wireshark", "Metasploit", "OWASP ZAP", "Nessus"],
    timeline: "1–3 weeks per engagement",
  },
  "03": {
    tagline: "Harden the perimeter. Watch the traffic.",
    overview:
      "Whether you're securing a single office or a multi-site deployment, I design network architectures that segment correctly, log everything, and stop attacks at the edge.",
    deliverables: [
      "Network topology design & documentation",
      "Firewall ruleset configuration",
      "VLAN segmentation strategy",
      "IDS/IPS deployment & tuning",
      "Traffic analysis & packet capture review",
      "Monitoring dashboards & alert rules",
      "Playbook for incident escalation",
    ],
    process: [
      { step: "01", title: "Audit", detail: "Map current topology, identify exposure points." },
      { step: "02", title: "Design", detail: "Propose segmented, defense-in-depth architecture." },
      { step: "03", title: "Deploy", detail: "Configure firewalls, VLANs, and monitoring." },
      { step: "04", title: "Tune", detail: "Reduce false positives, tune alerting thresholds." },
      { step: "05", title: "Document", detail: "Deliver runbooks and topology diagrams." },
    ],
    stack: ["pfSense", "Cisco IOS", "Snort", "Suricata", "Wireshark", "Grafana"],
    timeline: "2–4 weeks",
  },
  "04": {
    tagline: "Ship fast without shipping vulnerabilities",
    overview:
      "I integrate security into your existing CI/CD pipeline so every commit is scanned, every container is hardened, and every deploy is auditable — without slowing your team down.",
    deliverables: [
      "CI/CD pipeline audit & redesign",
      "Static analysis (SAST) integration",
      "Dependency & container scanning",
      "Secrets management setup",
      "Infrastructure-as-Code security review",
      "Automated security gate on PRs",
      "Runbook & team onboarding session",
    ],
    process: [
      { step: "01", title: "Assess", detail: "Review current pipeline and toolchain." },
      { step: "02", title: "Integrate", detail: "Add scanners and gates without blocking velocity." },
      { step: "03", title: "Automate", detail: "Wire up alerts, dashboards, and rollback rules." },
      { step: "04", title: "Train", detail: "Walk the team through new workflows." },
      { step: "05", title: "Iterate", detail: "Monthly review to keep tooling sharp." },
    ],
    stack: ["GitHub Actions", "Docker", "Terraform", "Trivy", "Semgrep", "Snyk"],
    timeline: "2–5 weeks",
  },
};

/* ---------------------------------------------------------
   Specialized
   --------------------------------------------------------- */
export const specialized = [
  { icon: "Lock", title: "Zero-Trust Architecture", sub: "Never trust, always verify" },
  { icon: "Cloud", title: "Cloud Security", sub: "AWS, Azure, GCP" },
  { icon: "Database", title: "Secure Database Design", sub: "Encrypted storage" },
  { icon: "Smartphone", title: "Mobile App Security", sub: "iOS/Android hardening" },
  { icon: "TrendingUp", title: "Security Auditing", sub: "Comprehensive assessments" },
  { icon: "FileText", title: "Compliance & Governance", sub: "GDPR, ISO 27001" },
  { icon: "Bug", title: "Bug Bounty Hunting", sub: "Proactive discovery" },
  { icon: "PieChart", title: "Risk Assessment", sub: "Mitigation strategies" },
];

/* ---------------------------------------------------------
   Projects
   --------------------------------------------------------- */
export const projects = [
  {
    id: 1,
    title: "QPaints",
    description:
      "Full-featured paint eCommerce website with product catalog, cart, and order management.",
    tech: ["PHP", "MySQL", "JavaScript"],
    link: "https://obadtech.freehosting.dev/QPaints/pages/index.php",
    img: "/site/qpaint.png",
  },
  {
    id: 2,
    title: "CRM System",
    description:
      "Customer relationship management platform for tracking leads, contacts, and sales pipelines.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "https://obadtech.freehosting.dev/crm-system/",
    img: "/site/crm.png",
  },
  {
    id: 3,
    title: "Grillz Website",
    description:
      "Modern custom jewelry showcase with elegant product presentation and contact integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://obadtech.freehosting.dev/grillz-website/",
    img: "/site/grillz.png",
  },
  {
    id: 4,
    title: "Missionary Church",
    description:
      "Non-profit missionary platform with donation system, event calendar, and global outreach tools.",
    tech: ["WordPress", "PHP", "MySQL"],
    link: "https://worldlivingmissionary.infinityfree.me/",
    img: "/site/church.png",
  },
  {
    id: 5,
    title: "O-Shield",
    description:
      "Incident reporting and response platform for security teams to track, manage, and resolve threats.",
    tech: ["PHP", "MySQL", "Security"],
    link: "https://obadtech.freehosting.dev/o-shield/",
    img: "/site/o-shield.png",
  },
  {
    id: 6,
    title: "Trackway Logistics",
    description:
      "Logistics management platform with shipment tracking, fleet management, and delivery scheduling.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "https://obadtech.freehosting.dev/trackway_logistics/",
    img: "/site/trackway.png",
  },
  {
    id: 7,
    title: "Boss Portfolio",
    description:
      "Modern personal portfolio with animated UI, project showcase, and contact integration.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://obadtech.freehosting.dev/boss-portfolio/",
    img: "/site/boss-portfolio.png",
  },
  {
    id: 8,
    title: "Fingerprint System",
    description:
      "Examination attendance tracking using biometric fingerprint authentication with real-time logging.",
    tech: ["PHP", "MySQL", "Biometrics"],
    link: "https://obadtech.freehosting.dev/fingerprint-system/",
    img: "/site/fingerprint.png",
  },
  {
    id: 9,
    title: "Scent of Joy",
    description:
      "Minimalist perfume boutique with elegant product display and seamless shopping experience.",
    tech: ["React", "Node.js", "Render"],
    link: "https://scent-of-joy.onrender.com/",
    img: "/site/scentofjoy.png",
  },
  {
    id: 10,
    title: "Rosebulge",
    description:
      "Cooperative community platform with member portal, resource sharing, and event coordination.",
    tech: ["React", "Netlify", "CSS"],
    link: "https://rosebulge.netlify.app/",
    img: "/site/rosebulge.png",
  },
];

/* ---------------------------------------------------------
   Certifications
   --------------------------------------------------------- */
export const certifications = [
  {
    id: "cisco",
    title: "Cisco Certified CyberOps Associate",
    issuer: "Cisco Networking Academy",
    year: "2024",
    credentialId: "CSCO-2024-0823",
    description:
      "Elite certification in security operations, incident response, and network intrusion analysis. Industry-recognized credential.",
    img: "/certificates/cert2.png",
    highlights: [
      "Security Operations",
      "Incident Response",
      "Network Intrusion Analysis",
    ],
    verified: true,
    badge: "Cisco",
  },
  {
    id: "voks",
    title: "Full Stack Web Development",
    issuer: "VoksInstitute",
    year: "2024",
    credentialId: "VOKS-FS-2024-112",
    description:
      "Comprehensive training in modern web architecture, front-end frameworks, and scalable back-end solutions. Completed with honors.",
    img: "/certificates/cert1.png",
    highlights: [
      "Modern web architecture",
      "Front-end frameworks",
      "Scalable back-end solutions",
    ],
    verified: true,
    badge: "With Honors",
  },
];

/* ---------------------------------------------------------
   Contact
   --------------------------------------------------------- */
export const contactInfo = [
  {
    icon: "Phone",
    label: "Phone / WhatsApp",
    value: "+234 700 702 90750",
    sub: "Available 24/7",
    href: "tel:+23470070290750",
  },
  {
    icon: "Mail",
    label: "Email Address",
    value: "obaday0503@gmail.com",
    sub: "Response within 24 hours",
    href: "mailto:obaday0503@gmail.com",
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Akure, Nigeria",
    sub: "Remote · Worldwide",
  },
  {
    icon: "Clock",
    label: "Availability",
    value: "24/7 – Always Online",
    sub: "Immediate response",
  },
];

/* ---------------------------------------------------------
   Navigation
   --------------------------------------------------------- */
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

/* =========================================================
   LEGAL — Terms of Service & Privacy Policy
   Rendered by <LegalModal /> in the Footer.
   ========================================================= */
const LAST_UPDATED = "October 5, 2026";

export const legal = {
  terms: {
    title: "Terms of Service",
    lastUpdated: LAST_UPDATED,
    intro:
      "These Terms of Service (\u201cTerms\u201d) govern your access to and use of this website (the \u201cSite\u201d). By accessing or using the Site you agree to be bound by these Terms. If you do not agree, please do not use the Site.",
    sections: [
      {
        heading: "1. Use of the Site",
        body: "You may use this Site for lawful, personal, and informational purposes only. You agree not to: (a) use the Site in any way that violates applicable laws or regulations; (b) attempt to gain unauthorised access to any part of the Site, its servers, or connected systems; (c) interfere with or disrupt the Site\u2019s operation; or (d) reproduce, duplicate, copy, sell, or exploit any portion of the Site without prior written permission.",
      },
      {
        heading: "2. Intellectual Property",
        body: "All content on this Site \u2014 including text, project writeups, dashboards, source code samples, graphics, and the overall design \u2014 is the intellectual property of Ayokunle Obadare unless otherwise stated, and is protected by applicable copyright and trademark laws. You may not republish or redistribute content without attribution and prior written consent.",
      },
      {
        heading: "3. Client Engagements & Submissions",
        body: "When you submit information through the contact form, subscribe to the newsletter, or send an inquiry, you confirm that the information you provide is accurate and that you have the right to share it. You grant permission to use your submission solely for the purpose of responding to your inquiry or delivering the content you subscribed to.",
      },
      {
        heading: "4. No Professional Advice",
        body: "Content on this Site \u2014 including project writeups, security commentary, and technical demonstrations \u2014 is provided for general informational purposes only and does not constitute legal, financial, or professional security advice. Any decisions you make based on the content are your own responsibility.",
      },
      {
        heading: "5. Third-Party Links",
        body: "The Site may contain links to third-party websites (for example, GitHub, LinkedIn, X, Facebook, or live project deployments). We are not responsible for the content, privacy practices, or availability of those websites. Accessing third-party sites is at your own risk.",
      },
      {
        heading: "6. Disclaimer of Warranties",
        body: "The Site and its content are provided on an \u201cas is\u201d and \u201cas available\u201d basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, secure, or error-free.",
      },
      {
        heading: "7. Limitation of Liability",
        body: "To the fullest extent permitted by law, Ayokunle Obadare shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site, even if advised of the possibility of such damages.",
      },
      {
        heading: "8. Changes to These Terms",
        body: "We may update these Terms from time to time. The \u201cLast updated\u201d date at the top of this page will reflect the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.",
      },
      {
        heading: "9. Governing Law",
        body: "These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.",
      },
      {
        heading: "10. Contact",
        body: "Questions about these Terms can be sent to obaday0503@gmail.com.",
      },
    ],
  },

  privacy: {
    title: "Privacy Policy",
    lastUpdated: LAST_UPDATED,
    intro:
      "This Privacy Policy explains how this website (the \u201cSite\u201d) collects, uses, stores, and protects information when you visit or interact with it. By using the Site you consent to the practices described below.",
    sections: [
      {
        heading: "1. Information We Collect",
        body: "We only collect information you voluntarily provide through the contact form and the newsletter subscription. This may include your name, email address, project type or interest, and any message you choose to send. We do not collect sensitive personal data, and we do not use tracking pixels or advertising identifiers.",
      },
      {
        heading: "2. How We Use Your Information",
        body: "Your information is used solely to: (a) respond to your inquiry or project request; (b) send you updates or content you explicitly subscribed to; and (c) maintain a record of your subscription preference (for example, to honour unsubscribe requests). We never sell, rent, or trade your personal information.",
      },
      {
        heading: "3. Legal Basis for Processing",
        body: "We process your information based on your consent (when you submit the form or subscribe) and legitimate interest in responding to professional inquiries. You may withdraw consent at any time by unsubscribing or contacting us directly.",
      },
      {
        heading: "4. Data Storage & Security",
        body: "Subscription data is stored securely using industry-standard safeguards. Locally, subscription preferences may be cached in your browser\u2019s localStorage so the Site can recognise returning subscribers. We take reasonable measures to protect against unauthorised access, alteration, or loss, but no method of transmission over the internet is 100% secure.",
      },
      {
        heading: "5. Cookies & Local Storage",
        body: "This Site does not use advertising or cross-site tracking cookies. It may use browser localStorage to remember subscription status and prevent duplicate sign-ups. You can clear this data at any time from your browser settings.",
      },
      {
        heading: "6. Third-Party Services",
        body: "If you choose to reach out through a third-party platform (for example GitHub, LinkedIn, X, or Facebook), the privacy policies of those platforms apply to that interaction. The Site itself does not share your form data with third parties except as required to deliver the service you requested (for example, an email delivery provider for the newsletter).",
      },
      {
        heading: "7. Your Rights",
        body: "You have the right to: access the personal information we hold about you; request correction or deletion of that information; withdraw consent at any time; and object to processing. To exercise any of these rights, contact obaday0503@gmail.com and we will respond within a reasonable timeframe.",
      },
      {
        heading: "8. Data Retention",
        body: "We retain subscription information for as long as you remain subscribed. If you unsubscribe, your email address is removed from the active subscriber list. Contact form messages may be retained for a reasonable period for record-keeping and follow-up purposes.",
      },
      {
        heading: "9. Children\u2019s Privacy",
        body: "This Site is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has submitted information, please contact us so we can delete it.",
      },
      {
        heading: "10. International Transfers",
        body: "If you access the Site from outside Nigeria, your information may be transferred to and processed in Nigeria or wherever our service providers operate. By using the Site you consent to this transfer.",
      },
      {
        heading: "11. Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. The \u201cLast updated\u201d date at the top will reflect the most recent revision. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.",
      },
      {
        heading: "12. Contact",
        body: "For any privacy-related questions or requests, contact obaday0503@gmail.com.",
      },
    ],
  },
};