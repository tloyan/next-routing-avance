import users from '@/db/user'
import Image from 'next/image'
export default function Page({params}: {params: {id: string}}) {
  const currentUser = users.find(
    (user) => user.id === Number.parseInt(params.id)
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
