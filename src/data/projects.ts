export interface ProjectImage {
  label: string;
  src: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  images?: ProjectImage[];
  image?: string;
}

export const projects: Project[] = [
  {
    title: "CleanRideNeo — Car Wash Management System",
    description:
      "A complete car wash management ecosystem comprising a Customer Web Application, an Admin Web Dashboard, and an Admin Mobile Application. Features secure JWT authentication with role-based access control (RBAC), end-to-end order and workflow management, digital payment integration via Midtrans, and real-time order status updates powered by Socket.IO.",
    tech: [
      "React.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "JWT",
      "RBAC",
      "Socket.IO",
      "Midtrans",
      "React Native",
      "Expo",
      "NativeWind",
    ],
    images: [
      {
        label: "Admin Web",
        src: "/projects/project-1-admin.jpg",
      },
      {
        label: "Native Admin",
        src: "/projects/project-1-native.jpg",
      },
      {
        label: "Customer Web",
        src: "/projects/project-1-customer.jpg",
      },
    ],
    githubUrl: "https://github.com/zachrrd/carwash-app",
  },
  {
    title: "SeoulSync — K-Pop Editorial Blog",
    description:
      "A modern editorial publishing web application dedicated to K-pop comebacks, album reviews, concert dispatches, and fandom culture. Allows readers to explore published articles, search content by keywords, and filter by editorial categories with dynamic detail pages. Includes an administrative CMS dashboard with rich-text content creation and secure database management.",
    tech: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Jodit Editor",
    ],
    images: [
      {
        label: "Homepage",
        src: "/projects/seoulsync/homepage.png",
      },
      {
        label: "Categories",
        src: "/projects/seoulsync/category-filter.png",
      },
      {
        label: "Search",
        src: "/projects/seoulsync/search-results.png",
      },
      {
        label: "Article",
        src: "/projects/seoulsync/article-detail.png",
      },
    ],
    githubUrl: "https://github.com/zachrrd/seoulsync",
    liveUrl: "https://seoulsync-iota.vercel.app/",
  },
];