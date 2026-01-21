'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Gamepad2 } from 'lucide-react'

export default function NavBar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/projects', label: 'PROJECTS' },
    { href: '/experience', label: 'EXPERIENCE' },
    { href: '/resume', label: 'RESUME' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav>
      <div className="flex items-center gap-2">
        <Gamepad2 className="w-6 h-6 text-neon-pink-500" />
        <h1>BILLY.EXE</h1>
      </div>

      <div className="flex gap-4 ml-auto flex-wrap">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'border-neon-pink-500 bg-retro-purple-800 text-neon-pink-400' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
