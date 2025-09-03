"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "House History",
    description: "HouseHistory.com is a storytelling platform built on WordPress, where users can explore and share the history of homes and architecture",
    category: "WordPress",
    image: "/househistory.png",
    url: "https://househistory.com/",
    tech: ["WordPress", "PHP", "MySQL", "HTML5", "CSS", "JavaScript"],
    ribon: true,
  },
  {
    id: 2,
    title: "Custom Shopify Theme",
    description: "Responsive theme with advanced product filtering, wishlist functionality, and optimized checkout.",
    category: "shopify",
    image: "/shopify-store-fashion-website-design.png",
    url: "https://example-shopify.com",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS3"],
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Enterprise-level project management tool with real-time collaboration and reporting features.",
    category: "laravel",
    image: "/task-management-dashboard-with-charts.png",
    url: "https://example-tasks.com",
    tech: ["Laravel", "Vue.js", "MySQL", "Redis"],
  },
  {
    id: 4,
    title: "Restaurant Website",
    description: "Modern restaurant website with online reservations, menu management, and customer reviews.",
    category: "wordpress",
    image: "/elegant-restaurant-website-with-food-images.png",
    url: "https://example-restaurant.com",
    tech: ["WordPress", "Custom Theme", "JavaScript", "PHP"],
  },
  {
    id: 5,
    title: "Fashion Store",
    description: "High-converting Shopify store with AR try-on features and personalized recommendations.",
    category: "shopify",
    image: "/fashion-clothing-store-website-modern-design.png",
    url: "https://example-fashion.com",
    tech: ["Shopify Plus", "React", "GraphQL", "Shopify AR"],
  },
  {
    id: 6,
    title: "CRM Dashboard",
    description: "Comprehensive customer relationship management system with analytics and automation.",
    category: "laravel",
    image: "/crm-dashboard-with-analytics-charts-and-data.png",
    url: "https://example-crm.com",
    tech: ["Laravel", "Livewire", "Alpine.js", "PostgreSQL"],
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "wordpress", label: "WordPress" },
  { id: "shopify", label: "Shopify" },
  { id: "laravel", label: "Laravel" },
]

export function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          A showcase of my recent work across different technologies and platforms
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
