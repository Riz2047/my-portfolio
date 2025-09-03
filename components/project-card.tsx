"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Link } from "lucide-react"
import Image from "next/image"
import { FaLink } from 'react-icons/fa';

interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
  url: string
  ribon?: boolean;
  tech: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

return (
  <Card
    className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
   
   <div className='text-center demo-effects mb-5'>
      <div className="web-item block my-7 mx-5 relative border-violet-200 rounded-md overflow-hidden">
        <div className={`layout-container shadow-md w-full bg-white rounded-md inline-flex bg-cover ease-out duration-200 bg-no-repeat`} style={{backgroundImage: `url('${project.image}')`}}>
          {project.ribon &&(
            <div className="ribbon-1 h-20 bg-emerald-500 -top-1.5 left-3.5 relative mb-80 shadow-lime-600">
              <span className='first:mt-3 block text-white min-h-4 lowercase'>n</span>
              <span className='block text-white min-h-4 lowercase'>e</span>
              <span className='block text-white min-h-4 lowercase'>w</span>
            </div>
          )}
        </div>
        <div className="img-overlay absolute -bottom-24 inset-x-0 bg-white/90 text-center px-20 py-10 opacity-0 invisible text-base">
          <a
            href={project.url}
            target="_blank"
            className="text-orange-500 cursor-pointer"
          >
            <h6><span className="text-primary">{project.title}</span></h6>
          </a>
          <p className='text-sm'>
            {project.description}...
          </p>
          <a href={project.url}
            className="text-orange-500 bg-transparent border-orange-500 border py-1.5 px-4 inline-block"><FaLink></FaLink>
          </a>
        </div>
      </div>
    </div>

    {/* Card Content */}
    <CardContent className="p-6">
      <div className="mb-3">
        <Badge variant="secondary" className="text-xs">
          {project.category.toUpperCase()}
        </Badge>
      </div>

      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);


}
