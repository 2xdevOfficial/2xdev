import type { TeamMember, Value } from "../types/about";
import type { StatItem } from "../types/shared";

export const aboutStats: StatItem[] = [
  { num: "2022", label: "Founded" },
  { num: "50+", label: "Projects delivered" },
  { num: "5+", label: "Team members" },
  { num: "98%", label: "Client satisfaction" },
];

export const values: Value[] = [
  {
    icon: "⚡",
    title: "Ship, then polish",
    desc: "We get working software in front of users fast, then sharpen it with real feedback — momentum beats perfection.",
  },
  {
    icon: "🧩",
    title: "Right tool, every time",
    desc: "We’re framework-agnostic. We choose the stack that fits your product, budget and timeline — not our habits.",
  },
  {
    icon: "🔍",
    title: "Radical transparency",
    desc: "Weekly demos, honest timelines and clear pricing. If something’s off track, you’ll hear it from us first.",
  },
  {
    icon: "🛡️",
    title: "Own what you build",
    desc: "Clean, tested, documented code with no lock-in. It’s your product — you should never be held hostage.",
  },
  {
    icon: "🤝",
    title: "Partners, not vendors",
    desc: "No account managers or hand-offs. You work directly with the engineers building your product.",
  },
  {
    icon: "📈",
    title: "Built to scale",
    desc: "We architect for where you’re going, not just where you are — so your platform grows with you.",
  },
];

export const team: TeamMember[] = [
  {
    name: "Syed Aftab",
    role: "Founder & Lead Engineer",
    init: "SA",
    av: "#5b4ee6",
  },
  {
    name: "Syed Taqi",
    role: "Founder & Lead Engineer",
    init: "ST",
    av: "#6c5ce7",
  },
  {
    name: "Muhammad Yaseen",
    role: "AI Agent Builder",
    init: "MY",
    av: "#0f1b2d",
  },
  {
    name: "Mohsin",
    role: "Senior Full Stack Developer",
    init: "M",
    av: "#4a3ed1",
  },
];

export const aboutTech: string[] = [
  "Angular",
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "Spring Boot",
  "Shopify",
  "WordPress",
  "Square",
  "MySQL",
  "MongoDB",
  "Firebase",
];
