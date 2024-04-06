import React from 'react'
//import {checkUserRole} from '@/lib/auth'

export default function Layout({
  editor,
  admin,
}: {
  editor: React.ReactNode
  admin: React.ReactNode
}) {
  const role = Math.random() > 0.5 ? 'admin' : 'editor' //checkUserRole()
  // return <>{role === 'admin' ? admin : editor}</>
  return (
    <>
      {editor}
      {role === 'admin' ? admin : undefined}
    </>
  )
}
