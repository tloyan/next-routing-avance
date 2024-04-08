'use client'
import {selectUsers} from '@/db/sgbd-simulator'
import clsx from 'clsx'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import React from 'react'
import type {User} from '@/db/user'

export default function NavLinks() {
  const pathname = usePathname()
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(() => {
    const fetchUsers = async () => {
      const u = await selectUsers()
      setUsers(u)
    }
    fetchUsers()
    console.log('pathname:', pathname)
  }, [pathname])

  return (
    <aside className="from-dark-900 w-64 space-y-2 bg-gradient-to-b via-gray-800 to-gray-900 p-4">
      {/* Menu items */}
      <nav className="flex flex-col">
        {users.map((user) => {
          return (
            <Link
              key={user.id}
              href={`/bo/users/${user.id}`}
              className={clsx(
                'block rounded px-4 py-2 transition-colors hover:bg-gray-700',
                {
                  'bg-sky-100 text-slate-900':
                    pathname === `/bo/users/${user.id}`,
                }
              )}
            >
              <p className="hidden md:block">{user.name}</p>
            </Link>
          )
        })}
        {links.map((link) => {
          // const LinkIcon = link.icon

          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'block rounded px-4 py-2 transition-colors hover:bg-gray-700',
                {
                  'bg-sky-100 text-slate-900': pathname === link.href,
                }
              )}
            >
              {/* <LinkIcon className="w-6" /> */}
              <p className="hidden md:block">{link.name}</p>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

const links = [
  {
    name: 'Home',
    href: '/',
    icon: undefined, // Remplace `HomeIcon` par l'importation de ton icône spécifique
  },
  {
    name: 'Backoffice',
    href: '/bo',
    icon: undefined, // De même, remplace `InfoIcon` par ton icône d'information
  },
  {
    name: 'Report',
    href: '/bo/reports',
    icon: undefined, // Et encore, remplace `MailIcon` par l'icône de courrier
  },
  {
    name: 'parallele (Roles)',
    href: '/parallele',
    icon: undefined, // Et encore, remplace `MailIcon` par l'icône de courrier
  },
]
