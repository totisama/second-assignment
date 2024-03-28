import React from 'react'

export const CocktailsSectionSkeleton = () => {
  const cocktails = ['', '', '', '']

  return (
    <section className="cocktails-section">
      {cocktails.map((_, index) => (
        <div key={index} className="skeleton-card is-loading">
          <div className="image"></div>
          <div className="content">
            <h2></h2>
            <p></p>
          </div>
        </div>
      ))}
    </section>
  )
}
