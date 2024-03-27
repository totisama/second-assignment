export async function POST(request: Request) {
  const res = await request.json()
  console.log('res', res)
  // const res = await fetch('https://httpbin.org/post', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'API-Key': process.env.DATA_API_KEY!,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // })

  // const data = await res.json()

  return Response.json({})
}
