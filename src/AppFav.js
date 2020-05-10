import React from 'react'
import Favorites from './favoritesComponents/Favorites'
import FavoritesData from './favoritesComponents/FavoritesData'

const AppFav = () => {
    const FavoritesComponent = FavoritesData.map(data => {
        return (
            <Favorites key={data.id} question={data.question} answer={data.answer} />  // key component is required for map
        )
    }
    )

    return (
        <div>
            {FavoritesComponent}
        </div>
    )
}
export default AppFav