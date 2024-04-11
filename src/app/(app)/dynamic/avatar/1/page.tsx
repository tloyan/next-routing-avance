import users from '@/db/user'
import Image from 'next/image'

// 🐶 recupère le props 'params' et extrait l'id'
// 🤖 {params}: {params: {id: string}}
export default function Page() {
  // 🐶 utilise l'id  en props pour recuperer le user de la bd
  const avatarID = '1'
  const currentUser = users.find(
    (user) => user.id === Number.parseInt(avatarID)
  )

  return (
    <div className="flex flex-col items-center">
      <p className="text-center">{currentUser?.name}</p>
      <Image
        className="overflow-hidden rounded-full"
        src={currentUser?.avatar ?? ''}
        alt="Avatar"
        width="100"
        height="100"
      ></Image>
    </div>
  )
}
