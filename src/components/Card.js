import React from "react";
import './Card.css';

function Card({title, imageURL, body}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src="https://cdn.prod.website-files.com/62041b52ed8a5756a8361408/650b76b2a66ebc491e52d45f_abundance-2.jpg" alt="Evolusi" />
      </div>

      <div className="card-content">

      <div className="card-title">
        <h3>Evolusi</h3>
      </div>

      <div>
        <p>
          rgfrg
        </p>
      </div>

      <div className="btn">
        <button>
          <a href="\pages\Evolusi.js">
            View More
          </a>
        </button>
      </div>

      </div>
    </div>
  );
};

export default Card;

// function Card() {
//   return(
//     <div className="card">
//       <img className="card-image" src="https://cdn.prod.website-files.com/62041b52ed8a5756a8361408/650b76b2a66ebc491e52d45f_abundance-2.jpg" alt="Evolution"></img>

//       <h2 className="card-title">Evolusi</h2>

//       <p className="card-text">Bab Evolusi</p>
//     </div>
//   );
// }

// export default Card;