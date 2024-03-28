import { Cocktail } from '@/types'
import { CocktailCard } from './cocktail-card'

export const CocktailsSection = async ({ cocktail }: { cocktail: string }) => {
  const response = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`
  )
  const data = (await response.json()) as { drinks: Cocktail[] }
  const cocktails = data.drinks || []

  return (
    <section className="cocktails-section">
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </section>
  )
}
