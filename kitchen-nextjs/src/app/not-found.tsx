import Link from 'next/link'

export default function Custom404() {
  return (
    <section className="not-found-section">
      <h1>Page Doesnt Exist</h1>
      <Link href="/">Go back to home</Link>
    </section>
  )
}
