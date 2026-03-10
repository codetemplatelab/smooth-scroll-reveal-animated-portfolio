import { motion as Motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { easeOut, staggerContainer, timelineReveal } from '../components/motion'

function ExperienceSection({ experience }) {
  return (
    <AnimatedSection id="experience">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Timeline"
          description="Roles focused on frontend systems, interaction design, and delivery for product teams."
        />

        <div className="relative">
          <Motion.div
            className="absolute left-3 top-2 hidden h-[calc(100%-18px)] w-[2px] origin-top bg-[linear-gradient(180deg,#06b6d4,#818cf8,transparent)] md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 1.1, ease: easeOut }}
          />

          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {experience.map((item, index) => (
              <Motion.article
                key={`${item.company}-${item.role}`}
                custom={index}
                variants={timelineReveal}
                className="relative rounded-2xl border border-cyan-100/80 bg-white/75 p-5 shadow-[0_10px_40px_-26px_rgba(14,165,233,0.7)] backdrop-blur-md md:ml-10 md:p-6"
              >
                <span className="absolute -left-[34px] top-10 hidden h-3 w-3 rounded-full border-2 border-cyan-600 bg-white md:block" />
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                    <p className="text-sm font-medium text-cyan-700">{item.company}</p>
                  </div>
                  <p className="font-mono-title text-xs uppercase tracking-[0.16em] text-slate-500">
                    {item.duration}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </Motion.article>
            ))}
          </Motion.div>
        </div>
      </Container>
    </AnimatedSection>
  )
}

export default ExperienceSection

