import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl">nested</h1>
      <div>
        <Link href="/nested/nested">Go to /nested/nested</Link>
      </div>
    </div>
  )
}
