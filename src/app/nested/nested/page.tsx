import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl">nested / nested</h1>
      <div>
        <Link href="/nested">Go to /nested</Link>
      </div>
    </div>
  )
}
