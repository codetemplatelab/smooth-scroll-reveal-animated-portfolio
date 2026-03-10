import { motion } from 'framer-motion'
import { sectionReveal } from './motion'

function AnimatedSection({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-24 ${className}`}>
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

export default AnimatedSection
