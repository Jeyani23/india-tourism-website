import "./Home.css";
import gandhi from "../assets/gandhi.jpg";
import bhagat from "../assets/bhagat.jpg";
import nehru from "../assets/nehru.jpg";
import subhash from "../assets/subhash.jpg";

function Explore() {
  return (
    <div className="explore-container">

      <h1>History of India & Freedom Struggle</h1>

      <p className="explore-intro">
        India is one of the world’s oldest civilizations, with a rich heritage
        spanning thousands of years. Under British colonial rule, Indians united
        across regions and cultures to fight for independence. The freedom
        struggle was marked by sacrifice, courage, and determination.
      </p>

      <div className="fighters">

        <div className="fighter-card">
          <img src={gandhi} alt="Mahatma Gandhi" />
          <h3>Mahatma Gandhi</h3>
          <p>
            Known as the Father of the Nation, Gandhi led India’s freedom movement
            through non-violence and civil disobedience. His leadership united
            millions against British rule.
          </p>
        </div>

        <div className="fighter-card">
          <img src={bhagat} alt="Bhagat Singh" />
          <h3>Bhagat Singh</h3>
          <p>
            A revolutionary freedom fighter who inspired youth with his fearless
            resistance. He sacrificed his life for India’s independence.
          </p>
        </div>

        <div className="fighter-card">
          <img src={nehru} alt="Jawaharlal Nehru" />
          <h3>Jawaharlal Nehru</h3>
          <p>
            A central leader of the freedom movement and India’s first Prime
            Minister, Nehru helped shape modern democratic India.
          </p>
        </div>

        <div className="fighter-card">
          <img src={subhash} alt="Subhas Chandra Bose" />
          <h3>Subhas Chandra Bose</h3>
          <p>
            Leader of the Indian National Army, Bose believed in armed struggle.
            His patriotism and leadership remain legendary.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Explore;
