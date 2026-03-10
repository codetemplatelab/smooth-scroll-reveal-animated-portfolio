import { motion as Motion } from 'framer-motion'
import { sectionReveal } from './motion'

function AnimatedSection({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
      <Motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.22 }}
      >
        {children}
      </Motion.div>
    </section>
  )
}

export default AnimatedSection

