//import {cookies} from 'next/headers'

export async function GET() {
  const res = await fetch(
    'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all'
  )
  const data = await res.json()

  return Response.json({data})
}
export async function POST() {
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('API-Key', process.env.DATA_API_KEY ?? '')

  const res = await fetch(
    'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({time: new Date().toISOString()}),
    }
  )

  const data = await res.json()

  return Response.json(data)
}
