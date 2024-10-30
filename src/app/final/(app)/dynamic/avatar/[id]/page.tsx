import users from '@/db/user'
import Image from 'next/image'
import {notFound} from 'next/navigation'

// Next 15 : les params deviennent async
export default async function Page(props: {params: Promise<{id: string}>}) {
  const params = await props.params
  const currentUser = users.find(
    (user) => user.id === Number.parseInt(params.id)
  )
  if (!currentUser) notFound()
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
