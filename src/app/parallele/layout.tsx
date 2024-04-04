import React from 'react'
//import {checkUserRole} from '@/lib/auth'

export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode
  admin: React.ReactNode
}) {
  const role = Math.random() > 0.5 ? 'admin' : 'user' //checkUserRole()
  return <>{role === 'admin' ? admin : user}</>
}
