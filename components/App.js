import Navbar from "./Navbar.js"
import Hero from "./Hero.js"
import Card from "./Card.js"
import data from "./data.js"

// object spread syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() {
    // always put map inside the function and return the values so that they can be used
    const cards = data.map(function(item) {
        return (
        <Card 
            key={item.id}  // unique property is necessary to prevent errors
            {...item} // instead of passing down the entire object just "spread it", take the properties of the day and creates a seperate prop for each property, similar to what we see in lines 17-24

            // item={item} // creates an object that you can retrieve values from in the Card.js, simplifies it here so your not passing all the values
            // title={item.title}
            // price={item.price}
            // img={item.coverImg}
            // rating = {item.stats.rating}
            // reviewCount = {item.stats.reviewCount}
            // location={item.location}
            // openSpots={item.openSpots}
        />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="gallery">
                {cards}
            </div>
        </div>
        
    )   
}
// coverImg: "katie-zaferes.png",
{/* <Card
    img={require("../assets/ katie-zaferes.png")}
    rating="5.0"
    reviewCount={6}
    location="USA"
    title="Life Lessons with Katie Zaferes"
    price={136}
/> */}