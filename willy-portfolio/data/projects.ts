import { Project } from "@/types";

// ---------------------------------------------------------------------------
// EDIT THIS FILE to add/update projects.
// - "liveUrl" and "codeUrl" are placeholders ("#") — replace with real links.
// - "stack" is a placeholder based on common tools for this kind of project —
//   double check and adjust it to match what you actually used.
// - The first project with "featured: true" is shown larger in the
//   Featured Project block.
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  {
    id: "01",
    name: "Inventory Management System",
    category: "Web Application",
    year: "2024",
    description:
      "Web application untuk membantu pengelolaan barang dan stok — mencatat barang masuk, barang keluar, dan sisa stok secara terpusat.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: "02",
    name: "Fast & Slow Moving Classification",
    category: "Data Science",
    year: "2024",
    description:
      "Sistem klasifikasi barang fast moving dan slow moving menggunakan algoritma Decision Tree untuk membantu analisis pergerakan stok gudang.",
    stack: ["Python", "Pandas", "Scikit-learn"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: "03",
    name: "Employee Management System",
    category: "Web Application",
    year: "2024",
    description:
      "Web-based employee management system untuk mengelola data karyawan, mulai dari pencatatan data diri hingga status kepegawaian.",
    stack: ["PHP", "MySQL", "Bootstrap"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];
