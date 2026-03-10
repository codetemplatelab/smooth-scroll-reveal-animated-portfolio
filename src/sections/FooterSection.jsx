import { Github, Linkedin } from 'lucide-react'
import Container from '../components/Container'

function FooterSection({ profile }) {
  return (
    <footer className="pb-8 pt-4">
      <Container>
        <div className="gradient-divider mb-6" aria-hidden="true" />
        <div className="flex flex-col gap-4 rounded-2xl border border-cyan-100/80 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-900">{profile.name}</p>
            <p className="text-sm text-slate-600">{profile.footerText}</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-100 bg-white text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-100 bg-white text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Copyright {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default FooterSection
