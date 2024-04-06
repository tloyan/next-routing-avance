export default function Page({params}: {params: {category: string}}) {
  return <div>My category: {params.category}</div>
}
