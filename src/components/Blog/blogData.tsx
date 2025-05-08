import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Best UI components for modern websites",
    paragraph:
      "Explore top-notch UI components to build sleek, responsive, and modern websites with ease.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Jignasha",
      image: "/images/blog/auth1.png",
      designation: "Web developer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Discover 9 easy and effective tips to enhance your design skills and create stunning visuals.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Jignasha",
      image: "/images/blog/auth1.png",
      designation: "Web developer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Speed up coding with task organization, code snippets, and less time spent debugging.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Jignasha",
      image: "/images/blog/auth1.png",
      designation: "Web developer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
