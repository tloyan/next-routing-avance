import Border from '@/components/boder'
import {Metadata} from 'next'

import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: 'App',
  description: "Page d'app",
}
export default function Layout({children}: PropsWithChildren) {
  const generateDate = new Date().toISOString()
  return (
    <div className="mx-auto flex h-[400px] w-full max-w-4xl flex-col items-center justify-center bg-slate-900 text-center">
      {children}

      <Border color="red">
        Generated <code>{generateDate}</code>{' '}
      </Border>
    </div>
  )
}
