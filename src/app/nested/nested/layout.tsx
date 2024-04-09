import {Metadata} from 'next'

import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: 'App',
  description: "Page d'app",
}
export default function Layout({children}: PropsWithChildren) {
  const generateDate = new Date().toISOString()
  return (
    <div className="mx-auto flex h-[200px] w-full max-w-2xl flex-col items-center justify-center bg-blue-900 text-center">
      {children}
      <div>
        Generated <code>{generateDate}</code>
      </div>
    </div>
  )
}
