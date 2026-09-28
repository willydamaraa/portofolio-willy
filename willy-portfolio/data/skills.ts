import { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "FRONTEND",
    items: [
      { name: "HTML", note: "markup & structure" },
      { name: "CSS", note: "styling & layout" },
      { name: "JavaScript", note: "logic & interactivity" },
      { name: "React", note: "component-based UI" },
      { name: "Next.js", note: "react framework" },
    ],
  },
  {
    category: "DATA",
    items: [
      { name: "Python", note: "scripting & analysis" },
      { name: "Excel", note: "spreadsheets & reporting" },
      { name: "Data Analysis", note: "reading patterns in data" },
    ],
  },
  {
    category: "TOOLS",
    items: [
      { name: "Git", note: "version control" },
      { name: "GitHub", note: "hosting & collaboration" },
    ],
  },
];
