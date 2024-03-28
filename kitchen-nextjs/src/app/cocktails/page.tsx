import { CocktailsSection } from '@/components/cocktails-section'
import { CocktailsSectionSkeleton } from '@/components/cocktails-section-skeleton'
import { SearchForm } from '@/components/search-form'
import { Suspense } from 'react'

export default async function CocktailsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined }
}) {
  const cocktail = searchParams?.cocktail || 'margarita'

  return (
    <main>
      <header className="site-header site-menu-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Search for our Cocktails</h1>

              <SearchForm />
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <Suspense fallback={<CocktailsSectionSkeleton />}>
        <CocktailsSection cocktail={cocktail} />
      </Suspense>
    </main>
  )
}
