import {Metadata} from 'next'

import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: 'App',
  description: "Page d'app",
}
export default function Layout({children}: PropsWithChildren) {
  //const generateDate = new Date().toISOString()
  return <main className="bg-red-500">{children}</main>
}
