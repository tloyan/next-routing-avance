export async function GET(request: Request, {params}: {params: {id: string}}) {
  const res = await fetch(
    'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all'
  )
  const data = await res.json()
  const productId = params.id
  const product = data?.data.find((item: {id: string}) => item.id === productId)

  return Response.json(product)
}
export async function PUT(request: Request) {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('API-Key', process.env.DATA_API_KEY ?? '')

  console.log('body', request.body)

  // const res = await fetch(
  //   'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft',
  //   {
  //     method: 'POST',
  //     headers,
  //     body: JSON.stringify(request.body),
  //   }
  // )

  // const data = await res.json()

  return Response.json({ok: 'ok'})
}
