'use client'

import { Download, FileText } from 'lucide-react'
import PixelButton from '../_components/PixelButton'
import PixelCard from '../_components/PixelCard'
import NavBar from '../_components/NavBar'

export default function Resume() {
  return (
    <>
      <NavBar />
      <main>
        <div className="text-center mb-8">
          <h1 className="mb-4">
            <FileText className="inline w-8 h-8 mr-3" />
            RESUME_WATERLOO.PDF
          </h1>

          <PixelButton
            href="/Resume_Waterloo-2.pdf"
            variant="primary"
            icon={<Download className="w-5 h-5" />}
          >
            DOWNLOAD
          </PixelButton>
        </div>

        <PixelCard variant="terminal" className="h-[80vh]">
          <iframe
            src="/Resume_Waterloo-2.pdf"
            width="100%"
            height="100%"
            className="border-0"
            title="Billy Shi Resume"
          />
        </PixelCard>
      </main>
    </>
  )
}
