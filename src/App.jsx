import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Accessibility,
  ArrowRight,
  Atom,
  CloudCog,
  Code2,
  ExternalLink,
  Figma,
  Github,
  GitBranch,
  Globe,
  LayoutGrid,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Rocket,
  ServerCog,
  Smartphone,
  TestTube2,
  Twitter,
  UserRound,
  Wind,
  X,
} from 'lucide-react'
import { profile } from './data/profile'
import { experience } from './data/experience'
import { projects } from './data/projects'
import { skills } from './data/skills'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const iconMap = {
  Accessibility,
  Atom,
  CloudCog,
  Code2,
  Figma,
  GitBranch,
  LayoutGrid,
  Rocket,
  ServerCog,
  Smartphone,
  TestTube2,
  Wind,
}

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

const easing = [0.22, 1, 0.36, 1]

const sectionReveal = {
  hidden: { opacity: 0, y: 34 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easing },
  },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const cardReveal = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easing },
  },
}

const timelineReveal = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -36 : 36,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing },
  },
}

function SectionHeading({ title, description }) {
  return (
    <div className="mb-10 space-y-3">
      <p className="font-mono-title text-sm tracking-[0.22em] text-cyan-700">
        {title.toUpperCase()}
      </p>
      <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        {description}
      </p>
    </div>
  )
}

function RevealSection({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-24 ${className}`}>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        {children}
      </motion.div>
    </section>
  )
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const testimonialTrack = useMemo(
    () => [...profile.testimonials, ...profile.testimonials],
    [],
  )

  return (
    <div className="text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/85 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            className="font-mono-title text-lg font-semibold tracking-wide text-slate-900"
          >
            {profile.brand}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300/80 text-slate-700 transition hover:border-cyan-400 hover:text-cyan-700 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <ul
            className={`absolute left-4 right-4 top-[70px] rounded-2xl border border-slate-200 bg-white/95 px-4 transition-all duration-300 md:static md:flex md:w-auto md:items-center md:gap-7 md:border-none md:bg-transparent md:p-0 ${
              mobileMenuOpen
                ? 'visible translate-y-0 py-3 opacity-100'
                : 'invisible -translate-y-3 py-0 opacity-0 md:visible md:translate-y-0 md:opacity-100'
            }`}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative block py-2 text-sm font-medium text-slate-700 transition-colors hover:text-cyan-700 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-700 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="home" className="scroll-mt-24 py-16 md:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="space-y-7"
            >
              <motion.p
                variants={cardReveal}
                className="font-mono-title inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700"
              >
                {profile.availability}
              </motion.p>

              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {profile.name.split(' ').map((word, index) => (
                    <span className="mr-3 inline-block overflow-hidden" key={word}>
                      <motion.span
                        className="inline-block"
                        initial={{ y: '110%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          duration: 0.75,
                          delay: 0.16 * index,
                          ease: easing,
                        }}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </h1>
                <motion.p
                  variants={cardReveal}
                  className="font-mono-title text-lg text-cyan-700 md:text-xl"
                >
                  {profile.title}
                </motion.p>
                <motion.p
                  variants={cardReveal}
                  className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg"
                >
                  {profile.intro}
                </motion.p>
              </div>

              <motion.div
                variants={cardReveal}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.04] hover:bg-cyan-700"
                >
                  View Projects
                  <ArrowRight size={16} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition-transform duration-300 hover:scale-[1.04] hover:border-cyan-500 hover:text-cyan-700"
                >
                  Contact Me
                  <Mail size={16} />
                </a>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="grid gap-4 sm:grid-cols-3"
              >
                {profile.heroStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={cardReveal}
                    className="rounded-2xl border border-slate-200/90 bg-white/75 p-4 backdrop-blur-md"
                  >
                    <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easing, delay: 0.35 }}
              className="mx-auto w-full max-w-sm"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-3 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.35)] backdrop-blur-md">
                <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-cyan-200/60 blur-2xl" />
                <div className="absolute -bottom-10 -right-8 h-28 w-28 rounded-full bg-sky-200/70 blur-2xl" />
                <img
                  src={profile.profileImage}
                  alt={`${profile.name} portrait`}
                  className="relative h-[440px] w-full rounded-2xl object-cover object-center"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <RevealSection id="about">
          <SectionHeading
            title="About"
            description="I enjoy shipping polished interfaces where animation improves clarity, not noise."
          />
          <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.8, ease: easing }}
              className="relative"
            >
              <img
                src={profile.aboutImage}
                alt="Workspace setup"
                className="h-[340px] w-full rounded-3xl object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.8, ease: easing, delay: 0.05 }}
              className="space-y-5 rounded-3xl border border-slate-200/90 bg-white/70 p-6 md:p-8"
            >
              {profile.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 26)}
                  className="text-base leading-relaxed text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                  <MapPin size={16} />
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2">
                  <UserRound size={16} />
                  {profile.experienceYears}
                </span>
              </div>
            </motion.div>
          </div>
        </RevealSection>

        <RevealSection id="experience">
          <SectionHeading
            title="Experience"
            description="A timeline of roles focused on product engineering, accessibility, and smooth interaction design."
          />
          <div className="relative">
            <motion.div
              className="absolute left-3 top-2 hidden h-[calc(100%-20px)] w-[2px] origin-top bg-gradient-to-b from-cyan-400 via-slate-300 to-transparent md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: easing }}
            />
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              className="space-y-6"
            >
              {experience.map((item, index) => (
                <motion.article
                  key={`${item.company}-${item.role}`}
                  custom={index}
                  variants={timelineReveal}
                  className="relative rounded-2xl border border-slate-200/90 bg-white/80 p-5 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.8)] md:ml-10 md:p-6"
                >
                  <span className="absolute -left-[34px] top-10 hidden h-3 w-3 rounded-full border-2 border-cyan-600 bg-white md:block" />
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{item.role}</h3>
                      <p className="text-sm font-medium text-cyan-700">
                        {item.company} - {item.location}
                      </p>
                    </div>
                    <span className="font-mono-title text-xs uppercase tracking-[0.15em] text-slate-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">{item.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        <RevealSection id="skills">
          <SectionHeading
            title="Skills"
            description="Core tools and technologies I use to ship fast, maintainable, and accessible frontend products."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((skill) => {
              const SkillIcon = iconMap[skill.icon] ?? Code2
              return (
                <motion.article
                  key={skill.name}
                  variants={cardReveal}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3, ease: easing }}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex rounded-xl bg-cyan-50 p-2 text-cyan-700">
                      <SkillIcon size={20} />
                    </span>
                    <span className="font-mono-title text-xs uppercase tracking-[0.14em] text-slate-500">
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{skill.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {skill.description}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </RevealSection>

        <RevealSection id="projects">
          <SectionHeading
            title="Projects"
            description="Selected work with clean UI systems, performant state architecture, and reusable frontend patterns."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={cardReveal}
                whileHover={{ y: -7, scale: 1.01 }}
                transition={{ duration: 0.32, ease: easing }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/85"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-4 p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
                    >
                      <Globe size={16} />
                      Demo
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
        </RevealSection>

        <RevealSection id="testimonials">
          <SectionHeading
            title="Testimonials"
            description="Feedback from product teams and founders I worked with on frontend architecture and design implementation."
          />
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-4 md:p-6">
            <motion.div
              className="flex w-max gap-4"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
            >
              {testimonialTrack.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className="w-[290px] shrink-0 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 md:w-[340px]"
                >
                  <p className="text-sm leading-relaxed text-slate-600">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-5">
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
        </RevealSection>

        <RevealSection id="contact" className="pb-12 md:pb-16">
          <SectionHeading
            title="Contact"
            description="Let us build something thoughtful. Share your project goals and timeline and I will get back within 24 hours."
          />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-4 rounded-3xl border border-slate-200 bg-white/80 p-6"
            >
              <p className="text-base text-slate-600">{profile.contactBlurb}</p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-700"
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-cyan-700" />
                  {profile.location}
                </p>
                <p className="inline-flex items-center gap-2">
                  <UserRound size={16} className="text-cyan-700" />
                  {profile.availability}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                {profile.socialLinks.map((social) => {
                  const SocialIcon = socialIconMap[social.icon] ?? ExternalLink
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:scale-105 hover:border-cyan-500 hover:text-cyan-700"
                      aria-label={social.label}
                    >
                      <SocialIcon size={18} />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            <motion.form
              onSubmit={(event) => event.preventDefault()}
              variants={cardReveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-slate-200 bg-white/85 p-6 md:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-600">
                  Name
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:scale-[1.01] focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(8,145,178,0.15)]"
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-600">
                  Email
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:scale-[1.01] focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(8,145,178,0.15)]"
                  />
                </label>
              </div>
              <label className="mt-4 block space-y-2 text-sm font-medium text-slate-600">
                Subject
                <input
                  type="text"
                  placeholder="Project collaboration"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:scale-[1.01] focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(8,145,178,0.15)]"
                />
              </label>
              <label className="mt-4 block space-y-2 text-sm font-medium text-slate-600">
                Message
                <textarea
                  rows="5"
                  placeholder="Share your product idea, goals, and timeline..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition duration-200 focus:scale-[1.01] focus:border-cyan-500 focus:shadow-[0_0_0_4px_rgba(8,145,178,0.15)]"
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-cyan-700"
              >
                Send Message
                <ArrowRight size={16} />
              </button>
            </motion.form>
          </div>
        </RevealSection>
      </main>

      <footer className="border-t border-slate-200/80 bg-slate-50/70">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600">
            Copyright {new Date().getFullYear()} {profile.name}. Built with React,
            Tailwind, Framer Motion, and lucide-react.
          </p>
          <a
            href="#home"
            className="font-mono-title text-xs uppercase tracking-[0.16em] text-slate-500 transition hover:text-cyan-700"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App
