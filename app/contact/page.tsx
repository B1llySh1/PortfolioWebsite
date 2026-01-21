'use client'

import { Mail, Globe, Phone, MessageSquare } from 'lucide-react'
import PixelButton from '../_components/PixelButton'
import PixelCard from '../_components/PixelCard'
import NavBar from '../_components/NavBar'

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      href: 'mailto:l32shi@uwaterloo.ca',
      icon: <Mail className="w-6 h-6" />,
      variant: 'primary' as const,
      display: 'l32shi@uwaterloo.ca'
    },
    {
      label: 'Website',
      href: 'https://billyshi.com',
      icon: <Globe className="w-6 h-6" />,
      variant: 'secondary' as const,
      display: 'billyshi.com'
    },
    {
      label: 'Phone',
      href: 'tel:+12367889600',
      icon: <Phone className="w-6 h-6" />,
      variant: 'gameboy' as const,
      display: '+1-236-788-9600'
    },
  ]

  return (
    <>
      <NavBar />
      <main>
        <div className="text-center mb-8">
          <h1 className="mb-4">
            <MessageSquare className="inline w-8 h-8 mr-3" />
            CONTACT
          </h1>
          <p className="font-silkscreen text-gameboy-green-400">
            Choose your communication channel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact, index) => (
            <PixelCard key={index} variant="neon" delay={0.2 * index}>
              <div className="text-center">
                <div className="mb-4 flex justify-center text-neon-pink-500">
                  {contact.icon}
                </div>

                <h3 className="mb-4">{contact.label}</h3>
                
                <p className="text-xs font-silkscreen text-pixel-white mb-6 break-all">
                  {contact.display}
                </p>

                <PixelButton
                  href={contact.href}
                  variant={contact.variant}
                >
                  CONNECT
                </PixelButton>
              </div>
            </PixelCard>
          ))}
        </div>
      </main>
    </>
  )
}
