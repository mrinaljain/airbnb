import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import './App.css';
import cardDetails from "./data";

function App() {
  let cardsList = cardDetails.map(function(card){
    return <Card
      key = {card.id}
      //! using spread operators syntax
      // {...card}
      //! using simgle object insted of individual parameters
      cardItem = {card}
      //! using individual parameters
      // title={card.title}
      // rating={card.stats.rating}
      // status={card.id}
      // ratingCount={card.stats.reviewCount}
      // location={card.location}
      // img={card.coverImg}
      // rate={card.price}
      // openSpots = {card.openSpots}
    />
  });
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <div className="cardList">
        {cardsList}
      </div>
      
    </div>
  );
}

export default App;
