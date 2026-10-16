import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiVite,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiLaravel,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { TbSql, TbApi, TbShieldLock } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

export type SkillItem = {
  name: string;
  icon: IconType;
};

export type SkillCategory = {
  name: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    items: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "PHP", icon: SiPhp },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    name: "Frontend",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "React Native", icon: SiReact },
      { name: "Expo", icon: SiExpo },
      { name: "NativeWind", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "REST APIs", icon: TbApi },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "RBAC", icon: TbShieldLock },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    name: "Database & ORM",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma ORM", icon: SiPrisma },
    ],
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscCode },
      { name: "Figma", icon: SiFigma },
    ],
  },
];