export default function Page({params}: {params: {category: string}}) {
  return <div>My category: {params.category}</div>
}

export async function generateStaticParams() {
  console.log('generateStaticParams')
  //const posts = await fetch('https://.../posts').then((res) => res.json())
  const posts = [{category: 'shoes'}, {category: 'men'}, {category: 'women'}]
  return posts.map((post) => ({
    category: post.category,
  }))
}
