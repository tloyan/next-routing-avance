export default function Page({
  params,
}: {
  params: {slug: string; subCategories: string[]}
}) {
  return (
    <div>
      <h1>My category: {params.slug}</h1>
      {params.subCategories.map((sc) => (
        <p key={sc}>{sc}</p>
      ))}
    </div>
  )
}
