import Link from "next/link"
import { GitFork, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-mono font-semibold text-foreground">
            {"<devops />"}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/ernestoleo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GitFork className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/ernesto-leo-068134195" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:ernesto.leo5056@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
