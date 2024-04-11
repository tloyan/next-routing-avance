import Link from 'next/link'
import React from 'react'
{
  /* 
  🐶 Ajoute les 2 props supplémentaires necessaires pour 
  faire fonctionner nos routes parrallèles  
  */
}
export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h2>Gestion Admin / Editor Layout</h2>
      <div className="m-6 flex flex-col">
        {/* ⛏️ supprime ces 2 liens car ils ne seront pas utilisés */}
        <Link href="/parallel/admin">admin</Link>
        <Link href="/parallel/editor">editor</Link>
        {children}
        {/* 🐶 affiche la route éditor  */}
        {/* 🐶 affiche la route admin  */}

        {/* 🐶 pense à bonus-1. 🚀 rendu conditionel  */}
        {/* 🐶 pense à bonus-2. 🚀 Loading  */}
      </div>
    </>
  )
}
