import Link from 'next/link'

export default async function Page(props: {
  params: Promise<{subcategories: []}>
}) {
  const params = await props.params
  console.log(params.subcategories)
  return (
    <div>
      My SUB Categories :
      <ul>
        {params.subcategories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <Link href="/final/dynamic/shop/home">back</Link>
    </div>
  )
}
