'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export const SearchForm = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const setSearchParam = (e: FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams(searchParams)

    const { cocktail } = e.target as typeof e.currentTarget & {
      cocktail: { value: string }
    }

    if (cocktail.value !== '') {
      params.set('cocktail', cocktail.value)
    } else {
      params.delete('cocktail')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form className="search-form" onSubmit={setSearchParam}>
      <input className="search-input" name="cocktail" id="search" type="text" />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  )
}
