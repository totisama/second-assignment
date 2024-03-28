'use client'

import Link from 'next/link'

export default function CustomError() {
  return (
    <section className="not-found-section">
      <h1>Error happened :(</h1>
      <Link href="/">Go back to home</Link>
    </section>
  )
}
