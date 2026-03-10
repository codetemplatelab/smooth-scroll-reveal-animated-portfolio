import { useMemo } from 'react'
import { motion as Motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'

function TestimonialsSection({ testimonials }) {
  const testimonialTrack = useMemo(
    () => [...testimonials, ...testimonials],
    [testimonials],
  )

  return (
    <AnimatedSection id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Teams Say"
          description="Client and team feedback presented in animated cards with smooth horizontal motion."
        />

        <div className="overflow-hidden rounded-3xl border border-cyan-100/80 bg-white/75 p-4 shadow-[0_10px_40px_-28px_rgba(14,165,233,0.45)]">
          <Motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
          >
            {testimonialTrack.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="w-[290px] shrink-0 rounded-2xl border border-cyan-100/80 bg-white/85 p-5 md:w-[340px]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-600">"{item.feedback}"</p>
              </article>
            ))}
          </Motion.div>
        </div>
      </Container>
    </AnimatedSection>
  )
}

export default TestimonialsSection

