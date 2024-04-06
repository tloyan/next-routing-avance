import Link from 'next/link'

export default function Page({params}: {params: {subcategories: []}}) {
  console.log(params.subcategories)
  return (
    <div>
      My SUB Categories :
      <ul>
        {params.subcategories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <Link href="/dynamic/shop/home">back</Link>
    </div>
  )
}
