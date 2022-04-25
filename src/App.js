import React from 'react'
import './App.css';
import Header from '../src/components/Header'
import Card from '../src/components/Card'
import Data from './Data'


function App() {
  const [index, setIndex] = React.useState(0)

  function nextCard() {
    setIndex((index) => index + 1)
  }
  function prevCard() {
    setIndex((index) => index - 1)
  }


  const cards = Data.map((card) => {
    return(
      <Card 
          key={card.id}
          firstName={card.name.first} 
          lastName={card.name.last}
          city={card.city}
          country={card.country}
          title={card.title}
          employer={card.employer}
          favMovies={card.favoriteMovies}
          next={nextCard}
          prev={prevCard}
          index={index}
      />
    )
  })

  return (
    <div className="app">
      <Header />
      {cards[index]} 
    </div>
  );
}

export default App;