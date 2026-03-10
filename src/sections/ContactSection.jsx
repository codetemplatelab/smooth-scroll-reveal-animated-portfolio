import { motion as Motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { fadeUp, staggerContainer } from '../components/motion'

function ContactSection({ profile }) {
  return (
    <AnimatedSection id="contact" className="pb-12 md:pb-16">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let Us Build Something Great"
          description="Reach out by email or social channels, or send a quick message using the minimal contact form."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glow-card space-y-4 p-6"
          >
            <Motion.p variants={fadeUp} className="text-sm leading-relaxed text-slate-600">
              I partner with teams that care about design quality, strong frontend
              engineering, and measurable product outcomes.
            </Motion.p>
            <Motion.a
              variants={fadeUp}
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(120deg,#06b6d4,#6366f1)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-15px_rgba(99,102,241,0.7)] transition hover:shadow-[0_16px_30px_-14px_rgba(6,182,212,0.75)]"
            >
              <Mail size={16} />
              {profile.email}
            </Motion.a>

            <Motion.div variants={fadeUp} className="space-y-2 text-sm text-slate-600">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-cyan-700"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-cyan-700"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </Motion.div>
          </Motion.div>

          <Motion.form
            onSubmit={(event) => event.preventDefault()}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="glow-card space-y-4 p-6 md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-600">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="input-glow"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-600">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input-glow"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-600">
              Subject
              <input
                type="text"
                placeholder="Project inquiry"
                className="input-glow"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-600">
              Message
              <textarea
                rows="5"
                placeholder="Tell me about your project goals..."
                className="input-glow resize-none"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(120deg,#0ea5e9,#4f46e5,#06b6d4)] bg-[length:220%_220%] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_32px_-15px_rgba(79,70,229,0.8)]"
            >
              Send Message
              <ArrowRight size={16} />
            </button>
          </Motion.form>
        </div>
      </Container>
    </AnimatedSection>
  )
}

export default ContactSection

