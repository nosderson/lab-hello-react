import "./App.css";
import Card from "./components/Card";
import menu from "./images/menu-top-xs.png";
import logo from "./images/ironhack-logo-xs.png";
import fundo from "./images/fundo.png";
import card1 from "./images/icon1.png";
import card2 from "./images/icon2.png";
import card3 from "./images/icon3.png";
import card4 from "./images/icon4.png";

const cards = [
  { source: card1, alt: "Declarative", title: "Declarative", text: "React makes it painless to create interactive UIs." },
  { source: card2, alt: "Components", title: "Declarative", text: "Build encapsulated components that manage their state." },
  { source: card3, alt: "Single-Way", title: "Declarative", text: "A set of imutable values are passed to the component\"s." },
  { source: card4, alt: "JSX", title: "Declarative", text: "Statically-typed designed to run on modern browsers." }
]

function App() {
  return (
    <div className="App">
      <div>
        <section className="App-header">
        </section>
        <section classname="hero-image" style={{ backgroundImage: `url(${fundo})` }} >
          <div className="hero-text">
            <nav>
              <img src={logo} alt="Logo IronHack"></img>
              <img src={menu} alt="Menu"></img>
            </nav>
            <h1>Say hello to React JS</h1>
            <p>
              You will learn how to use the most popular frontend library, and
              become a suer Ninja Developer
            </p>
            <div>
              <input type="button" value="Awesome!"></input>
            </div>
          </div>
        </section>
        <section>
          <div className="cards">
            {cards.map(card => {
              return (
                <Card source={card.source} title={card.title} alt={card.alt} text={card.text} />
              )
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
