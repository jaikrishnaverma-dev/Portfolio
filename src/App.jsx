import "./App.css";
import Awards from "./components/Awards";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <header >
        <Nav/>
      </header>
      <main className="container">
        <section className="hero">
          <Hero/>
        </section>
        <div className="devicer"></div>
        <section className="skills" id="skill_tab">
          <Skill/>
        </section>
        <div className="devicer"></div>
        <section className="awards" id="award_tab">
          <Awards/>
        </section>
      </main>
      <footer className="container">

      </footer>
    </>
  );
}

export default App;
