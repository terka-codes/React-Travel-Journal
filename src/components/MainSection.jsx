import React from "react"
import TravelCard from "./TravelCard"
import data from "../data/data"

const MainSection = () => {
    const cards = data.map(item => {
        const hrEl = item.id >= data.length ? false : true
        return (
            <div key={item.id}>
                <TravelCard item={item} />
                {hrEl && <hr className="travel-card__hr" key={`hr-${item.id}`} />}
            </div>
        )
    })
  return (
    <main className="main">
        {cards}
    </main>
  )
}

export default MainSection