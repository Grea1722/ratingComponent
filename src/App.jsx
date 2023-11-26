import { useState } from "react";
import star from "./assets/star.png";
import "./App.css";

const ratingButtons = [1, 2, 3, 4, 5];

function App() {
  const [rating, setRating] = useState(null);

  const handleRating = (calif) => {
    setRating(calif);
  };

  return (
    <div className="ratingComp">
      <img src={star} alt="star icon" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rate">
        {ratingButtons.map((valor) => (
          <button key={valor} onClick={() => handleRating(valor)}>
            {valor}
          </button>
        ))}
      </div>
      <button className="submit">Submit</button>
    </div>
  );
}

export default App;
