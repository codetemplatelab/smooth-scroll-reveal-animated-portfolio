import { motion as Motion } from 'framer-motion'
import { BriefcaseBusiness, Code2 } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { easeOut } from '../components/motion'

function AboutSection({ profile }) {
  return (
    <AnimatedSection id="about">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Developer Story"
          description="A concise overview of background, technical focus, and career progression."
        />
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.72, ease: easeOut }}
            className="gradient-border-card p-3"
          >
            <img
              src={profile.aboutImage}
              alt="Developer workspace"
              className="h-[360px] w-full rounded-[1.3rem] object-cover"
            />
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.72, ease: easeOut, delay: 0.05 }}
            className="glow-card space-y-5 p-6 md:p-8"
          >
            {profile.biography.map((item) => (
              <p key={item.slice(0, 24)} className="text-base leading-relaxed text-slate-600">
                {item}
              </p>
            ))}

            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Code2 size={16} className="text-cyan-700" />
                Technology Focus
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {profile.technologyFocus}
              </p>
            </div>

            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                <BriefcaseBusiness size={16} className="text-cyan-700" />
                Career Summary
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                {profile.careerSummary}
              </p>
            </div>
          </Motion.div>
        </div>
      </Container>
    </AnimatedSection>
  )
}

export default AboutSection

