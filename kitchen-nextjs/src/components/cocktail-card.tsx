import { Cocktail } from '@/types'
import Image from 'next/image'

export const CocktailCard = ({ cocktail }: { cocktail: Cocktail }) => {
  return (
    <div className="card">
      <Image
        width={700}
        height={700}
        src={cocktail.strDrinkThumb}
        className="card-img-top"
        alt={cocktail.strDrink}
      />
      <div className="card-body">
        <h2 className="card-title">{cocktail.strDrink}</h2>
        <h3 className="card-subtitle">Main Ingredients:</h3>
        <ul className="ingredients-list">
          <li>{cocktail.strIngredient1}</li>
          <li>{cocktail.strIngredient2}</li>
          <li>{cocktail.strIngredient3}</li>
        </ul>
        <p className="card-text">{cocktail.strInstructions}</p>
      </div>
    </div>
  )
}
