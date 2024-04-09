/* eslint-disable @typescript-eslint/no-unused-vars */
import {Metadata} from 'next'
import Link from 'next/link'
import {PropsWithChildren} from 'react'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'App',
  description: "Page d'app",
}
export default function Layout({children}: PropsWithChildren) {
  //const generateDate = new Date().toISOString()
  return <main className="mx-auto max-w-4xl flex-1 p-4">{children}</main>
}
