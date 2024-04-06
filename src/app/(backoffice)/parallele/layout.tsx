import React, {Suspense} from 'react'
//import {checkUserRole} from '@/lib/auth'

export default async function Layout({
  editor,
  admin,
}: {
  editor: React.ReactNode
  admin: React.ReactNode
}) {
  const role = Math.random() > 0.5 ? 'admin' : 'editor' //checkUserRole()
  // return <>{role === 'admin' ? admin : editor}</>
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000)
  // })
  return (
    <>
      {editor}
      <Suspense fallback={<div>Loading...</div>}>
        {role === 'admin' ? admin : undefined}
      </Suspense>
    </>
  )
}
