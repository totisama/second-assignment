import { NextResponse } from 'next/server'

export async function POST(request: Request, response: Response) {
  const requestData = await request.json()

  console.log(requestData)
  const res = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
  })

  const data = await res.json()

  return NextResponse.json(data)
}
