import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowDown,
  Briefcase,
  Terminal,
  Server,
  Coffee,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const skills = [
  { name: "Java", icon: Coffee },
  { name: "Spring Boot", icon: Server },
  { name: "REST APIs", icon: Code2 },
  { name: "Microservices", icon: Server },
  { name: "SQL / PostgreSQL", icon: Database },
  { name: "Git & GitHub", icon: Github },
  { name: "Maven / Gradle", icon: Terminal },
  { name: "Docker", icon: Terminal },
  { name: "JUnit & Mockito", icon: Code2 },
  { name: "Hibernate / JPA", icon: Database },
];

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce backend built with Spring Boot featuring user authentication, product management, cart system, and order processing with RESTful APIs.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task and project management with role-based access control, real-time notifications using WebSockets, and comprehensive API documentation with Swagger.",
    tech: ["Java", "Spring Security", "WebSocket", "Swagger", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "URL Shortener Service",
    description:
      "High-performance URL shortening microservice with analytics dashboard, rate limiting, and caching layer. Handles thousands of redirects per second.",
    tech: ["Java", "Spring Boot", "Redis", "MongoDB", "JUnit"],
    github: "#",
    live: "#",
  },
];

const experience = [
  {
    role: "Java Developer",
    company: "Tech Solutions Inc.",
    period: "2023 — Present",
    description:
      "Building scalable microservices and REST APIs for enterprise clients. Reduced API response times by 40% through query optimization and caching strategies.",
  },
  {
    role: "Junior Java Developer",
    company: "StartUp Labs",
    period: "2021 — 2023",
    description:
      "Developed backend services using Spring Boot and Hibernate. Collaborated with cross-functional teams to deliver features on schedule with 95%+ test coverage.",
  },
];

/* ------------------------------------------------------------------ */
/*  Intersection Observer hook for fade-in                             */
/* ------------------------------------------------------------------ */

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useFadeIn();
  return (
    <section
      id={id}
      ref={ref}
      className={`opacity-0 py-20 px-6 ${className}`}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                */
/* ------------------------------------------------------------------ */

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ---- Navbar ---- */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight hover:text-muted-foreground transition-colors"
          >
            Ankit<span className="text-muted-foreground">.</span>
          </a>

          <ul className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* ---- Hero ---- */}
      <Section id="hero" className="flex items-center justify-center min-h-[90vh]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground animate-fade-in-up">
            Hello, I'm
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight animate-fade-in-up delay-100">
            Ankit
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-muted-foreground animate-fade-in-up delay-200">
            Java Developer
          </p>
          <p className="mt-6 max-w-lg mx-auto text-muted-foreground leading-relaxed animate-fade-in-up delay-300">
            I build robust, scalable backend systems with clean and
            understandable code. Passionate about software craftsmanship
            and delivering reliable solutions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <a
            href="#about"
            className="mt-16 inline-block text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </Section>

      <Separator className="mx-auto max-w-3xl" />

      {/* ---- About ---- */}
      <Section id="about">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            I'm a detail-oriented Java developer who thrives on writing clean,
            maintainable code. With experience across the Spring ecosystem,
            I design and build RESTful APIs, microservices, and data-driven
            applications that scale. I believe great software starts with
            readable code, solid architecture, and thoughtful testing. When
            I'm not coding, you'll find me exploring new frameworks,
            contributing to open source, or sharpening my problem-solving
            skills on coding challenges.
          </p>
        </div>
      </Section>

      <Separator className="mx-auto max-w-3xl" />

      {/* ---- Skills ---- */}
      <Section id="skills">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          <p className="mt-3 text-muted-foreground">
            Technologies I work with every day.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map(({ name, icon: Icon }) => (
              <Badge
                key={name}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium gap-2 hover:bg-accent transition-colors cursor-default"
              >
                <Icon className="h-4 w-4" />
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      <Separator className="mx-auto max-w-3xl" />

      {/* ---- Projects ---- */}
      <Section id="projects">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-3 text-muted-foreground">
            A selection of things I've built.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-1">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="text-left border-border/40 hover:border-border transition-colors group"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="flex gap-2">
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.live}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`${project.title} Live`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Separator className="mx-auto max-w-3xl" />

      {/* ---- Experience ---- */}
      <Section id="experience">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          <p className="mt-3 text-muted-foreground">
            Where I've worked and what I've done.
          </p>

          <div className="mt-10 space-y-8">
            {experience.map((exp) => (
              <Card
                key={exp.role}
                className="text-left border-border/40 hover:border-border transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-semibold">{exp.role}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {exp.company}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Separator className="mx-auto max-w-3xl" />

      {/* ---- Contact ---- */}
      <Section id="contact">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            I'm always open to new opportunities, collaborations, or just a
            friendly conversation about Java and software engineering.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="outline" asChild className="gap-2 w-full sm:w-auto">
              <a href="mailto:ankit@example.com">
                <Mail className="h-4 w-4" />
                ankit@example.com
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 w-full sm:w-auto">
              <a href="https://github.com/ankit" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 w-full sm:w-auto">
              <a href="https://linkedin.com/in/ankit" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </Section>

      {/* ---- Footer ---- */}
      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ankit. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
