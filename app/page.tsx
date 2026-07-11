import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Scripts } from "@/components/portfolio/scripts"
import { Contact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Scripts />
      <Contact />
    </main>
  )
}
