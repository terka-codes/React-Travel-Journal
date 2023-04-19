import React from "react"
import TravelCard from "./TravelCard"
import data from "../data/data"

const MainSection = () => {
    const cards = data.map(item => {
        const hrEl = item.id >= data.length ? false : true
        return (
            <>
                <TravelCard 
                    key={item.id}
                    item={item}
                />
                {hrEl && <hr className="travel-card__hr" key={`hr-${item.id}`} />}
            </>
        )
    })
  return (
    <main className="main">
        {cards}
    </main>
  )
}

export default MainSection