import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Globe } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staggerContainer } from '../components/motion'

function ProjectsSection({ projects }) {
  return (
    <AnimatedSection id="projects">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Featured Work"
          description="Interactive project cards with staggered entry, gradient hover borders, and quick external links."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              whileHover={{ y: -7, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="gradient-border-card group p-3"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 px-1 pb-1 pt-4">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-100 bg-white/85 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
                  >
                    <Globe size={16} />
                    Demo
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}

export default ProjectsSection
