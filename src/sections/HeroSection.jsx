import { motion as Motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Container from '../components/Container'
import GradientButton from '../components/GradientButton'
import { easeOut, fadeUp, staggerContainer } from '../components/motion'
import mesh from '../assets/gradient-mesh.svg'

function HeroSection({ profile }) {
  return (
    <section id="home" className="scroll-mt-24 py-8 md:py-12">
      <Container>
        <div className="hero-gradient relative overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:p-12">
          <img
            src={mesh}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
            aria-hidden="true"
          />
          <Motion.div
            className="floating-orb absolute -left-20 top-8 h-44 w-44 rounded-full bg-cyan-300/45 blur-3xl"
            animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <Motion.div
            className="floating-orb absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-indigo-300/45 blur-3xl"
            animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <Motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-7"
            >
              <Motion.p
                variants={fadeUp}
                className="inline-flex rounded-full border border-cyan-200/70 bg-white/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800"
              >
                {profile.availability}
              </Motion.p>

              <div className="space-y-4">
                <Motion.h1
                  variants={fadeUp}
                  className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                  <span className="animate-gradient-text inline-block">
                    {profile.name}
                  </span>
                </Motion.h1>
                <Motion.p
                  variants={fadeUp}
                  className="font-mono-title text-base text-cyan-700 sm:text-lg"
                >
                  {profile.title}
                </Motion.p>
                <Motion.p
                  variants={fadeUp}
                  className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg"
                >
                  {profile.intro}
                </Motion.p>
              </div>

              <Motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <GradientButton href="#projects">
                  View Projects
                  <ArrowRight size={16} />
                </GradientButton>
                <GradientButton href="#contact" variant="secondary">
                  Contact Me
                  <Mail size={16} />
                </GradientButton>
              </Motion.div>

              <Motion.div
                variants={staggerContainer}
                className="grid gap-4 sm:grid-cols-3"
              >
                {profile.heroStats.map((stat) => (
                  <Motion.div key={stat.label} variants={fadeUp} className="glow-card p-4">
                    <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </Motion.div>
                ))}
              </Motion.div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeOut, delay: 0.25 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="gradient-border-card p-3">
                <img
                  src={profile.heroImage}
                  alt={`${profile.name} portrait`}
                  className="h-[430px] w-full rounded-[1.35rem] object-cover"
                />
              </div>
            </Motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection

