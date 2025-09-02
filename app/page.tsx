import { PortfolioHeader } from "@/components/portfolio-header"
import { ProjectShowcase } from "@/components/project-showcase"
import { ContactSection } from "@/components/contact-section"
import { PortfolioFooter } from "@/components/portfolio-footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Full Stack Developer</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            I craft end-to-end solutions with 6+ years of experience building scalable applications and leading
            development teams. Previously Senior Full Stack Developer at Stripe and Tech Lead at Vercel.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">JavaScript</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">React & Next.js</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Node.js</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">Python</span>
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">PHP</span>
          </div>
        </div>

        <ProjectShowcase />
      </main>

      <ContactSection />

      <PortfolioFooter />
    </div>
  )
}
