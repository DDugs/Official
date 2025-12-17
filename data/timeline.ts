export interface TimelineDetail {
  text: string;
  linkedinUrl?: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  icon?: string;
  details?: TimelineDetail[];
}

export const timelineData: TimelineMilestone[] = [
  {
    year: "2025",
    title: "Founded",
    description: "FLAGZ 0N FIR3 is a self-motivated community focused on finding skilled minds, learning relentlessly, and outplaying the best-together.",
    details: [
      { text: "Started with a core team of 3 passionate hackers from same college" },
      { text: "Established training programs for beginners" },
    ],
  },
  {
    year: "July",
    title: "Started CTFs",
    description: "Our team secured 86th place among a strong field of competitors. Excited to build on this experience and aim even higher in future competitions!",
    details: [
      { text: "Competed against 500+ teams globally" },
      { text: "Specialized in reverse engineering and web exploitation challenges", linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7368275168915279872" },
      { text: "Team grew to 5+ active members" },
    ],
  },
  {
    year: "September",
    title: "First CTF Victory",
    description: "Started with the 2nd position in Cybercom CTF",
    details: [
      { text: "Over 1000 participants but we burnt the flag" },
      { text: "Rewarding experience for our entire team", linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7378669949025701888" },
      { text: "Came in top 50 teams in bugcrowd CTF recieving their signature coin" },
    ],
  },
  {
    year: "December",
    title: "Burned Flag #4",
    description: "Competed with over 400+ teams globally and dominated",
    details: [
      { text: "Won 4th position in H7TEX CTF"},
      { text: "Burnt the flag with prizes worth 1.5 Lakhs" },
      { text: "Team size grew to 10+ active members" },
    ],
  },
  {
    year: "2026",
    title: "India's Top 20",
    description: "Achieved top 20 ranking in national cybersecurity competitions, in just few months of existence.",
    details: [
      { text: "Ranked in CTFtime top 20 India"},
      { text: "Dominated multiple national-level CTFs" },
      { text: "Flags burning this year", linkedinUrl: "https://ctftime.org/team/392211"},
    ],
  },
];

