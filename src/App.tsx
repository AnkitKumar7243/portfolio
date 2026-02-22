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
  Award,
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
  { name: "MySQL / MongoDb", icon: Database },
  { name: "Git & GitHub", icon: Github },
  { name: "Maven", icon: Terminal },
  { name: "Docker", icon: Terminal },
  { name: "JUnit & Mockito", icon: Code2 },
  { name: "Hibernate / JPA", icon: Database },
];

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Developed a Hospital Management System using Spring Boot and microservices architecture, building secure RESTful APIs for core operations. Implemented Spring Security for role-based access, integrated Hibernate with MySQL for data persistence, applied layered architecture, and ensured reliability through testing, validation, and exception handling.",
    tech: ["Spring Boot", "MySQL", "JWT", "Spring Security", "Hibernate", "RESTful APIs", "Microservices"],
    github: "https://github.com/AnkitKumar7243/Hospital_Management_System",
    live: "#",
  },
  {
    title: "Enquiry Management System (EMS)",
    description:
      "Developed a web-based CRUD application using Servlets, JSP, and JDBC with MVC architecture and secure session handling. Improved processing efficiency by 25% and ensured reliable deployment using Apache Tomcat with MySQL integration.",
    tech: ["Java", "Servlets", "JSP", "JDBC", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Pizza Billing System",
    description:
      "Developed a Pizza Billing System using Core Java OOP principles with dynamic customization features. Implemented real-time bill calculation and modular class design, ensuring scalable architecture, clean code structure, and easy future feature enhancements.",
    tech: ["Java", "OPPs", "SQL"],
    github: "https://github.com/AnkitKumar7243/Pizza-Project",
    live: "#",
  },
];

const experience = [
  {
    role: "Java Full Stack Developer",
    company: "PSA",
    period: "2025 — Present",
    description:
      "Developed and maintained RESTful APIs using Java and Spring Boot within a microservices architecture. Implemented Apache Kafka for event-driven communication, managed database operations with Spring Data JPA and MySQL, and improved backend stability through debugging. Containerized applications using Docker, automated CI/CD with Jenkins, and deployed services on AWS using Terraform. ",
  },
  {
    role: "Java Intern",
    company: "Internshala",
    period: "2024 — 2024",
    description:
      "Completed an 8-week Core Java training (June–August 2024), building strong fundamentals in Java syntax, programming logic, and OOP concepts. Gained hands-on experience with Advanced Java, JDBC for database connectivity, and basic GUI development. Applied learning through practical exercises and mini-projects, strengthening problem-solving and application development skills",
  },
];

const certifications = [
  {
    name: "Java Full Stack Developer",
    issuer: "PSA",
    date: "2026",
    credentialUrl: "#",
  },
  {
    name: "Core Java",
    issuer: "Inter Shala",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1CdMp-bV8vEZILkk2gFxH6uT9rBHHRR__/view",
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
            {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map(
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

      {/* ---- Certifications ---- */}
      <Section id="certifications">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          <p className="mt-3 text-muted-foreground">
            Professional credentials I've earned.
          </p>

          <div className="mt-10 space-y-4">
            {certifications.map((cert) => (
              <Card
                key={cert.name}
                className="text-left border-border/40 hover:border-border transition-colors"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <h3 className="font-semibold">{cert.name}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {cert.date}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                  {cert.credentialUrl && cert.credentialUrl !== "#" && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      View Credential
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
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
              <a href="mailto:ankitkumaryadav7243@gmail.com">
                <Mail className="h-4 w-4" />
                ankitkumaryadav7243@gmail.com
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 w-full sm:w-auto">
              <a href="https://github.com/AnkitKumar7243" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild className="gap-2 w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/ankit-kumar9693/" target="_blank" rel="noopener noreferrer">
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
