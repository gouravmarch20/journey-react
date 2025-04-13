import React, { useState, useEffect } from "react";

// Function to shuffle the cards
const shuffleCards = (array) => {
  console.log(`shuffle`, array);
  return (
    array
      .concat(array) // Duplicate cards to create pairs
      .sort(() => Math.random() - 0.5) // Shuffle cards
      .map((value, index) => ({
        id: index,
        value,
        isFlipped: false,
        isMatched: false,
      }))
  );
};

// Match Pair Component
const MatchPair = () => {
  const cardValues = ["A", "B", "C"]; // Unique values
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  console.log("cards_", shuffleCards(cardValues));

  useEffect(() => {
    setCards(shuffleCards(cardValues));
  }, []);

  const handleCardClick = (index) => {
    if (
      flippedCards.length === 2 ||
      cards[index].isFlipped ||
      cards[index].isMatched
    )
      return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    setFlippedCards([...flippedCards, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;

      if (cards[firstIndex].value === cards[secondIndex].value) {
        newCards[firstIndex].isMatched = true;
        newCards[secondIndex].isMatched = true;
        setMatchedPairs([...matchedPairs, cards[firstIndex].value]);
      }

      setTimeout(() => {
        newCards[firstIndex].isFlipped = newCards[firstIndex].isMatched;
        newCards[secondIndex].isFlipped = newCards[secondIndex].isMatched;
        setCards([...newCards]);
        setFlippedCards([]);
      }, 1000);
    }
  };

  const resetGame = () => {
    setCards(shuffleCards(cardValues));
    setFlippedCards([]);
    setMatchedPairs([]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Match Pair Game</h1>
      <p>by KodeKarma</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 100px)",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {cards.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(index)}
            style={{
              width: "100px",
              height: "100px",
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
              backgroundColor: card.isFlipped ? "#fff" : "#555",
              color: card.isFlipped ? "#000" : "transparent",
            }}
            data-testid={`card-${index}`}
          >
            {card.isFlipped || card.isMatched ? card.value : "?"}
          </button>
        ))}
      </div>

      {matchedPairs.length === cardValues.length && (
        <h2 data-testid="game-status">You Win!</h2>
      )}

      <button
        onClick={resetGame}
        style={{ padding: "10px", fontSize: "16px" }}
        data-testid="reset-button"
      >
        Reset Game
      </button>
    </div>
  );
};

// Main App Component
const App = () => {
  return <MatchPair />;
};

export default App;
