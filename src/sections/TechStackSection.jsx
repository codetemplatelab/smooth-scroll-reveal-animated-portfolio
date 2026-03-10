import { motion as Motion } from 'framer-motion'
import { Atom, Boxes, Cloud, Code2, GitBranch, Layers3, Server } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staggerContainer } from '../components/motion'

const iconMap = {
  Atom,
  Layers3,
  Server,
  Boxes,
  Cloud,
  GitBranch,
}

function TechStackSection({ profile }) {
  return (
    <AnimatedSection id="tech-stack">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I Build With"
          description="A focused stack for shipping scalable interfaces, backend integrations, and production deployments."
        />

        <Motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.24 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {profile.techStack.map((item) => {
            const Icon = iconMap[item.icon] ?? Code2
            return (
              <Motion.article
                key={item.name}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.25 }}
                className="glow-card flex items-center gap-4 p-5"
              >
                <span className="inline-flex rounded-xl bg-[linear-gradient(120deg,#22d3ee,#818cf8)] p-2 text-white shadow-[0_0_24px_rgba(129,140,248,0.4)]">
                  <Icon size={20} />
                </span>
                <span className="text-sm font-semibold text-slate-800">{item.name}</span>
              </Motion.article>
            )
          })}
        </Motion.div>
      </Container>
    </AnimatedSection>
  )
}

export default TechStackSection

