export default async function Page({
  params,
}: {
  params: Promise<{slug: string; subCategories: string[]}>
}) {
  console.log(await params)
  const slug = (await params).slug
  const subCategories = (await params).subCategories
  return (
    <div>
      <h1>My category: {slug}</h1>
      {subCategories && subCategories.map((sc) => <p>{sc}</p>)}
    </div>
  )
}
