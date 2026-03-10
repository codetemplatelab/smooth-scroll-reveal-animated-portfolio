import { motion } from 'framer-motion'
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
          <motion.div
            className="floating-orb absolute -left-20 top-8 h-44 w-44 rounded-full bg-cyan-300/45 blur-3xl"
            animate={{ y: [0, -18, 0], x: [0, 14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="floating-orb absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-indigo-300/45 blur-3xl"
            animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="space-y-7"
            >
              <motion.p
                variants={fadeUp}
                className="inline-flex rounded-full border border-cyan-200/70 bg-white/55 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-800"
              >
                {profile.availability}
              </motion.p>

              <div className="space-y-4">
                <motion.h1
                  variants={fadeUp}
                  className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
                >
                  <span className="animate-gradient-text inline-block">
                    {profile.name}
                  </span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  className="font-mono-title text-base text-cyan-700 sm:text-lg"
                >
                  {profile.title}
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  className="max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg"
                >
                  {profile.intro}
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <GradientButton href="#projects">
                  View Projects
                  <ArrowRight size={16} />
                </GradientButton>
                <GradientButton href="#contact" variant="secondary">
                  Contact Me
                  <Mail size={16} />
                </GradientButton>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid gap-4 sm:grid-cols-3"
              >
                {profile.heroStats.map((stat) => (
                  <motion.div key={stat.label} variants={fadeUp} className="glow-card p-4">
                    <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
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
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
