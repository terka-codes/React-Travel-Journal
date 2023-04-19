import React from 'react'
import TravelCard from "./TravelCard"
import data from "../data/data"

const Main = () => {
    const cards = data.map(item => {
        const hrEl = item.id >= data.length ? false : true
        return (
            <>
                <TravelCard 
                    key={item.id}
                    item={item}
                />
                {hrEl && <hr class="travel-card__hr" />}
            </>
        )
    })
  return (
    <main class="main">
        {cards}
    </main>
  )
}

export default Main