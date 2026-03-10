import { motion } from 'framer-motion'
import {
  Atom,
  Code2,
  Database,
  FileCode2,
  Network,
  Server,
  Sparkles,
  Wind,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staggerContainer } from '../components/motion'

const iconMap = {
  Atom,
  Code2,
  Wind,
  Server,
  Network,
  FileCode2,
  Sparkles,
  Database,
}

function SkillsSection({ skills }) {
  return (
    <AnimatedSection id="skills">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Core Capabilities"
          description="Gradient skill cards with hover glow effects, iconography, and staggered reveal transitions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon] ?? Code2

            return (
              <motion.article
                key={skill.name}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.28 }}
                className="gradient-skill-card p-5"
              >
                <span className="inline-flex rounded-xl bg-white/80 p-2 text-cyan-700 shadow-[0_0_18px_rgba(14,165,233,0.25)]">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{skill.name}</h3>
              </motion.article>
            )
          })}
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}

export default SkillsSection
