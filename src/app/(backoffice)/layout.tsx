import {Metadata} from 'next'
import {PropsWithChildren} from 'react'

export const metadata: Metadata = {
  title: 'App',
  description: "Page d'app",
}
export default async function BackofficeLayout({children}: PropsWithChildren) {
  return <main>{children}</main>
}
